#!/usr/bin/python3
import requests

BASE_URL = 'http://127.0.0.1:8000/api/'

def register_user(username, password, email, first_name, last_name):
    url = f'{BASE_URL}accounts/register/'
    data = {
        'username': username,
        'password': password,
        'email': email,
        'first_name': first_name,
        'last_name': last_name
    }
    response = requests.post(url, json=data)
    if response.status_code == 201:
        print('User registered successfully.')
    else:
        print(f'Failed to register user: {response.status_code} - {response.text}')

def obtain_jwt_token(username, password):
    url = f'{BASE_URL}token/'
    data = {
        'username': username,
        'password': password
    }
    response = requests.post(url, json=data)
    if response.status_code == 200:
        print('Token obtained successfully.')
        response_data = response.json()
        print('Access Token:', response_data.get('access'))
        print('Refresh Token:', response_data.get('refresh'))
        return response_data
    else:
        print(f'Failed to obtain token: {response.status_code} - {response.text}')
        return None

def refresh_jwt_token(refresh_token):
    url = f'{BASE_URL}token/refresh/'
    data = {
        'refresh': refresh_token
    }
    response = requests.post(url, json=data)
    if response.status_code == 200:
        print('Token refreshed successfully.')
        response_data = response.json()
        print('New Access Token:', response_data.get('access'))
        return response_data.get('access')
    else:
        print(f'Failed to refresh token: {response.status_code} - {response.text}')
        return None

def access_protected_route(token, user_id):
    url = f'{BASE_URL}accounts/user/{user_id}/'
    headers = {
        'Authorization': f'Bearer {token}'
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        print('Accessed protected route successfully.')
        print('User Details:', response.json())
    else:
        print(f'Failed to access protected route: {response.status_code} - {response.text}')

if __name__ == '__main__':
    # Replace these values with your test data
    username = 'mederhoo1'
    password = 'test'
    email = 'testuser@example.com'
    first_name = 'Hammed'
    last_name = 'Amusat'

    # Register a new user
    register_user(username, password, email, first_name, last_name)

    # Obtain JWT token
    token = obtain_jwt_token(username, password)

    if token:
        # Use the token to access a protected route
        access_protected_route(token.get('access'), 1)
        
        # Example: Refresh the JWT token
        # You should use the refresh token you obtained earlier
        refresh_token = token.get('refresh')
        new_token = refresh_jwt_token(refresh_token)
