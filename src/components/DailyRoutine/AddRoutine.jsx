import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AddRoutine = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { username } = useParams();
    const [routine, setRoutine] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newTime, setNewTime] = useState("");
    //fetch all routine
    useEffect(() => {
        const fetchRoutine = async () => {
            try {
                const response = await axios.post(`${apiUrl}/api/routine`, { username });
                setRoutine(response.data); // Assuming the response contains an array of routines
            } catch (error) {
                console.error("Error fetching routines:", error);
            }
        };
        fetchRoutine();
    }, [apiUrl, username]);

    // Add a new routine

    const addRoutine = async () => {
        try {
            const response = await axios.post(`${apiUrl}/api/newroutine`, { username, task: newTask, time: newTime });
            setRoutine(response.data);
        }
        catch (error) {
            console.log(error);


        }
    }
    // Finish routine
    const deleteRoutine = async (task) => {
        try {
            const response = await axios.delete(`${apiUrl}/api/finishRoutine`, {
                data: { username, task }, // Pass the data in the request body
            });
            setRoutine((prevRoutine) =>
                prevRoutine.filter((routine) => routine.task !== task)
            ); // Remove the deleted task locally
            console.log("Routine deleted successfully:", response.data);
        } catch (error) {
            console.error("Error deleting routine:", error);
        }
    };

    // completed Routine

    const completedRoutine = (task) =>{
        
        

    }





    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
            <h1 className="text-2xl font-bold text-gray-700 mb-6">
                Add Your Daily Routine
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4">
                <input
                    type="text"
                    onChange={(e) => { setNewTask(e.target.value) }}
                    placeholder="Enter Your Routine"
                    className="w-full md:flex-1 p-3 border-2 border-gray-300 rounded-lg text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                    type="time"
                    onChange={(e) => { setNewTime(e.target.value) }}
                    className="w-full md:flex-1 p-3 border-2 border-gray-300 rounded-lg text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <button onClick={addRoutine} className="w-full md:w-auto bg-green-500 px-6 py-3 text-white font-bold rounded-lg hover:bg-green-700 transition">
                    Add Routine
                </button>
            </div>
            <div className="mt-6 space-y-4">
                {routine.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <div>
                            <h2 className="text-lg font-bold text-gray-700">{item.task}</h2>
                            <p className="text-gray-500">Time: {item.time}</p>
                        </div>
                        <button
                        onClick={()=>completedRoutine(item.task)}
                            className="bg-green-500 px-4 py-2 text-white font-bold rounded-lg hover:bg-green-700 transition"
                        >
                            Complete
                        </button>
                        <button
                            className="bg-red-500 px-4 py-2 text-white font-bold rounded-lg hover:bg-red-700 transition"
                            onClick={() => deleteRoutine(item.task)}>
                            Delete
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddRoutine;
