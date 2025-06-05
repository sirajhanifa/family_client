import React from 'react'

const Button1 = ({label}) => {
  return (
    <button className="w-full md:w-auto bg-green-500 px-6 py-3 text-white font-bold rounded-lg hover:bg-green-700 transition">
        {label}
    </button>
  )
}

export default Button1