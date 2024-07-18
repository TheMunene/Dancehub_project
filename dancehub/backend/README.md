```markdown
# Django User Registration and Login API

This project is a Django-based RESTful API for user registration and login functionalities. It uses Django REST framework for building APIs and JWT for authentication.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Accessing the Admin Interface](#accessing-the-admin-interface)
- [Running Tests](#running-tests)
- [License](#license)

## Features

- User registration with username, email, password, first name, and last name.
- User login with JWT authentication.
- Retrieve user details.
- JWT token refreshing.
- Admin interface for managing users.

## Requirements

- Python 3.6+
- Django 3.2+
- Django REST framework
- Django REST framework Simple JWT

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/TheMunene/Dancehub_project
   cd Dancehub_project/dancehub/backend
   ```

2. **Create and activate a virtual environment:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install the dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a superuser:**

   ```bash
   python manage.py createsuperuser
   ```

6. **Run the development server:**

   ```bash
   python manage.py runserver
   ```

## Running the Project

With the development server running, you can access the application at `http://127.0.0.1:8000/`.

## API Endpoints

### User Registration

- **URL:** `/api/accounts/register/`
- **Method:** `POST`
- **Body:**
  ```json
  {
      "username": "testuser",
      "password": "testpass",
      "email": "testuser@example.com",
      "first_name": "Test",
      "last_name": "User"
  }
  ```

### Obtain JWT Token

- **URL:** `/api/token/`
- **Method:** `POST`
- **Body:**
  ```json
  {
      "username": "testuser",
      "password": "testpass"
  }
  ```

### Refresh JWT Token

- **URL:** `/api/token/refresh/`
- **Method:** `POST`
- **Body:**
  ```json
  {
      "refresh": "your_refresh_token"
  }
  ```

### Get User Details

- **URL:** `/api/accounts/user/<int:pk>/`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer <your_access_token>`

## Accessing the Admin Interface

To access the Django admin interface, navigate to `http://127.0.0.1:8000/admin/` and log in using the superuser credentials you created.

## Running Tests

You can run tests to verify the functionality of the API.


## License
mederhoo@gmail.com
open
```

### Explanation

- **Project Overview:** A brief description of the project and its features.
- **Requirements:** Specifies the software requirements.
- **Installation:** Provides step-by-step instructions to set up the project.
- **Running the Project:** Instructions on how to start the development server.
- **API Endpoints:** Lists the main API endpoints with sample requests.
- **Accessing the Admin Interface:** Instructions for accessing the Django admin interface.
- **Running Tests:** Explains how to run tests for the project.
- **License:** Specifies the license under which the project is distributed.

