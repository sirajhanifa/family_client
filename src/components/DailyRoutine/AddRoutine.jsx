import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddRoutine = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const {username} = useParams();
    const [routine, setRoutine] = useState('');
    useEffect(()=>{
        const fetchRoutine = async() =>{
            try{
                const respone = await axios.post(`${apiUrl}/api/routine`, {username})
                setRoutine(respone)                
            }
            catch(error)
            {
                console.log(error);
                
            }
        }
        fetchRoutine()

    }, [apiUrl])
    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
            <h1 className="text-2xl font-bold text-gray-700 mb-6">Add Your Daily Routine</h1>
            <div className="flex flex-col md:flex-row items-center gap-4">
                <input 
                    type="text"
                    placeholder="Enter Your Routine"
                    className="w-full md:flex-1 p-3 border-2 border-gray-300 rounded-lg text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input 
                    type="time"
                    className="w-full md:flex-1 p-3 border-2 border-gray-300 rounded-lg text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <button 
                    className="w-full md:w-auto bg-green-500 px-6 py-3 text-white font-bold rounded-lg hover:bg-green-700 transition">
                    Add Routine
                </button>
            </div>
            
            
        </div>
    );
}

export default AddRoutine;
