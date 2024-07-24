import React, { useState } from 'react';
import logo from '../assets/logo.png'
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/register/', {
                username,
                password,
                email,
                first_name: firstName,
                last_name: lastName
            });
            if (response.status === 201) {
                setMessage('Registered successfully login below');
            }
        } catch (error) {
            setMessage('Failed to register user: ' + error.response?.data?.detail || error.message);
        }
    };

    return (
        <div className=" flex items-center relative justify-center overflow-x-hidden ">
            <img className="" alt='logo' src={logo} />
            <form action="#" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="_token" value="7DTUeYngmjEirGGRwMJ7mAPKCFfKQ90Q1tcleqRf" autocomplete="off" />

                <div class="relative 2xl:mb-8 xl:mb-4 lg:mb-4 md:mb-4 mb-4">
                    <label class="flex items-center mb-2 text-gray-600 text-sm font-medium">First Name</label>
                    <input type="text" id="default-search" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        class="block w-full h-12 px-5 py-3 text-base leading-8 font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                        placeholder="Enter first name.." required />
                </div>

                <div class="relative 2xl:mb-8 xl:mb-4 lg:mb-4 md:mb-4 mb-4">
                    <label class="flex items-center mb-2 text-gray-600 text-sm font-medium">Last Name</label>
                    <input type="text" id="default-search" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}
                        class="block w-full h-12 px-5 py-3 text-base leading-8 font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                        placeholder="Enter last name.." required />
                </div>

                <div class="relative 2xl:mb-8 xl:mb-6 lg:mb-6 md:mb-6 mb-4">
                    <label class="flex items-center mb-2 text-gray-600 text-sm font-medium">Email</label>
                    <input type="text" name="email" id="default-search" value={email} onChange={(e) => setEmail(e.target.value)}
                        class="block w-full h-12 px-5 py-3 text-base leading-8 font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                        placeholder="Enter your email.." required />
                </div>

                <div class="relative 2xl:mb-8 xl:mb-6 lg:mb-6 md:mb-6 mb-4">
                    <label class="flex items-center mb-2 text-gray-600 text-sm font-medium">Username</label>
                    <input type="text" name="username" id="default-search"
                        class="block w-full h-12 px-5 py-3 text-base leading-8 font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                        required placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div class="relative 2xl:mb-8 xl:mb-6 lg:mb-6 md:mb-6 mb-4">
                    <label class="flex items-center mb-2 text-gray-600 text-sm font-medium">Password</label>
                    <input type="password" name="password" id="default-search" value={password} onChange={(e) => setPassword(e.target.value)}
                        class="block w-full h-12 px-5 py-3 text-base leading-8 font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                        placeholder="Enter your password.." required />
                </div>

                <button type="submit"
                    class="w-full py-3 px-5 text-base bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 h-12 hover:bg-indigo-700 mb-10">
                    Register
                </button>

                <div>
                    {message && <p>{message}</p>}
                </div>

                <p class="text-center">
                    <a href="/login" class="font-normal text-base leading-7 text-indigo-600 text-right w-full">
                        Already have an account?
                    </a>
                </p>
            </form>

        </div>
    );
};
export default Register
