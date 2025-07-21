import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader'; // Adjust path

const SignUp = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    username: '',
    phone: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const postUser = async () => {
    const { username, phone, password } = form;

    if (!username || !phone || !password) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/api/newUser`, form);
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.error || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-[url('./assets/nature2.jpeg')] bg-cover bg-center">
      {loading && <Loader />}
      <div className={`w-80 h-96 bg-white rounded-xl p-8 flex flex-col items-center border border-gray-300 shadow-lg transition-all duration-300 ${loading ? 'blur-sm pointer-events-none' : ''}`}>
        <h1 className="font-bold text-3xl text-center">Sign Up</h1>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} value={form.username} className="border w-full m-2 p-2 rounded-md" />
        <input type="number" name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} className="border w-full m-2 p-2 rounded-md" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password} className="border w-full m-2 p-2 rounded-md" />
        <button onClick={postUser} className="w-full bg-green-500 p-3 rounded-lg text-white font-bold hover:text-black m-2">Sign Up</button>
        <span>You already have an account? <span onClick={() => navigate('/')} className="text-blue-900 cursor-pointer hover:underline">Login</span></span>
      </div>
    </div>
  );
};

export default SignUp;
