import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL; // API URL from .env

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/api/login`, { username, password });

      if (response.status === 200) {
        const { token, user } = response.data;

        // Save token to localStorage for future requests
        localStorage.setItem('authToken', token);

        // Navigate to the dashboard
        navigate(`/Layout/${user.username}/Dashboard`);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Login failed.');
      } else {
        setError('An error occurred while trying to log in.');
      }
    }
  };

  return (
    <div className="bg-[url('./assets/nature-image.jpg')] bg-cover bg-center w-screen h-screen flex justify-center items-center">
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-96 mx-auto mt-20 text-center">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <span>
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/signup')}
            className="text-blue-900 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </span>
      </div>
    </div>
  );
};

export default Login;
