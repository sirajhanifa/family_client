import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ label }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if (label === 'Sign In') {
            navigate('/login')
        }
        else if (label === 'Sign Up') {
            navigate('/signup')
        }
    }
    return (
        <button
            onClick={handleClick}
            className="bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold px-4 py-2 rounded shadow hover:from-purple-500 hover:to-pink-500 hover:scale-105 transition-all duration-200"        >
            {label}
        </button>
    )
}

export default Button