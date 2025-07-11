import React from 'react'
import Heading from '../../components/Heading'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import usePost from '../../hooks/usePost';

const Report = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { username } = useParams();

    //hooks

    const { postData } = usePost();

    const [date, setDate] = useState('')
    const [incomeData, setIncomeData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await postData(`${apiUrl}/api/reports`, { username, date });
            if (!res) {
                alert("No expense available");
            } else {
                setIncomeData(res); // <-- Save the response object
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='w-full h-screen '>

            {/* Heading  */}
            <div className='w-full h-fit flex justify-center'>
                <Heading name="Reports" />
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
                <div className="mb-4 flex flex-col gap-2">
                    <label htmlFor="month" className="font-semibold text-gray-700">
                        Select Month:
                    </label>
                    <input
                        id="month"
                        name="month"
                        type="month"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Generate Report
                </button>
            </form>

            {incomeData && incomeData.total_income !== undefined && (
                <div className="max-w-md mx-auto mt-6 bg-gray-50 p-4 rounded shadow">
                    <h2 className="text-lg font-bold mb-2">Expense Report</h2>
                    <p><span className="font-semibold">Total Income:</span> {incomeData.total_income}</p>
                    <p><span className="font-semibold">Remaining Income:</span> {incomeData.remaining_income}</p>
                    <p><span className="font-semibold">Total Expense:</span> {incomeData.expense}</p>
                    <p><span className="font-semibold">Month:</span> {incomeData.month}</p>
                </div>
            )}

        </div>
    )
}

export default Report