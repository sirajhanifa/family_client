import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ label, className }) => {

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
            className={`px-5 py-2 rounded-lg font-semibold transition ${className}`}
        >
            {label}
        </button>
    )
}

export default Button