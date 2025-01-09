import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL; // API URL from .env

    const [newUser, setNewUser] = useState("");
    const [newPassword, setNewPassword] = useState("")

    const postUser = async () => {
        try {
            const response = await axios.post(`${apiUrl}/api/newUser`, {
                username: newUser,
                password: newPassword
            });
            setNewPassword("");
            setNewUser("");
            alert("Sign Up Successfully")
            
        } catch (error) {
            console.error("Error creating user:", error);
            alert("already have this User")
        }
    };


    return (
        <div className=" w-full h-screen  flex justify-center items-center bg-[url('./assets/nature2.jpeg')] bg-cover bg-center">

            <div className='w-80 h-96 bg-white rounded-xl p-8 flex flex-col items-center border border-gray-300 shadow-lg'>
                <h1 className='font-bold text-3xl text-center'>Sign Up</h1>
                <input type="text"
                    placeholder='Username'
                    className='border border-gray-500 w-full m-4 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 '
                    onChange={(e) => setNewUser(e.target.value)}
                />
                <input type="text"
                    placeholder='Password'
                    className='border border-gray-500 w-full m-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button className='w-full bg-green-500 p-3 rounded-lg text-white font-bold hover:text-black m-4'
                    onClick={postUser}>
                    Sign Up
                </button>
                <span>
                    You already have an account?
                    <span onClick={() => navigate('/')}
                        className="text-blue-900 cursor-pointer hover:underline">

                        Login
                    </span>
                </span>


            </div>

        </div>
    )
}

export default SignUp