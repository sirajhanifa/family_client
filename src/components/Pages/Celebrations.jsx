import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Celebrations = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [celebrations, setCelebrations] = useState([])

    useEffect(() => {
        const fetchCelebrations = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/celebrations`);
                setCelebrations(response.data); // Update state with data from the server
            } catch (error) {
                console.error('Error fetching celebrations:', error);
            }
        };

        fetchCelebrations();
    }, [apiUrl]);
    return (
        <div className='w-full h-full bg-gray-50 p-8'>
            <div className='w-full h-fit border border-black p-6 text-center'>
                <h1 class="text-4xl font-bold text-gray-800">🎉 Celebration Planner 🎉</h1>
                <p class="text-lg text-gray-600 mt-2">Keep track of birthdays, anniversaries, and all your special events!</p>


            </div>
            <div className='w-full h-56 border border-black text-center'>
                <input type="date" class="p-2 m-2 border-2 border-gray-300 rounded-lg text-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500" />

                <input type="text" placeholder='Enter your Momorable Moment' class="p-2 m-2 border-2 border-gray-300 rounded-lg text-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <button
                    class="bg-green-400 p-2 m-2 text-white font-bold rounded-lg hover:bg-green-800">ADD CELEBRATIONS</button>
                    


            </div>
            


        </div>
    )
}

export default Celebrations