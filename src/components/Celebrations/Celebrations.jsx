import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { usePDF } from 'react-to-pdf';




const Celebrations = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { username } = useParams();
    const [celebrations, setCelebrations] = useState([]);
    const [newEventDate, setNewEventDate] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(null)
    const [formData, setFormData] = useState({
        description: "",
        eventDate: "",
    })
    const {to} = usePDF({filename:"hanifa.pdf"})




    // Fetch all celebrations from the server
    useEffect(() => {
        const fetchCelebrations = async () => {
            try {
                const response = await axios.post(`${apiUrl}/api/celebrations`, { username });
                setCelebrations(response.data); // Update state with data from the server
            } catch (error) {
                console.error('Error fetching celebrations:', error);
            }
        };

        fetchCelebrations();
    }, [apiUrl, username]);

    // Add a new celebration
    const addCelebration = async () => {
        try {
            if (!newEventDate.trim() || !newDescription.trim()) {
                alert('Event Date and Description cannot be empty!');
                return;
            }
            const response = await axios.post(`${apiUrl}/api/newcelebration`, {
                username,
                eventDate: newEventDate,
                description: newDescription,
            });
            setCelebrations(response.data);
            setNewEventDate('');
            setNewDescription('');

        }
        catch (error) {
            console.log(error);

        }
    }


    //toggleEdit
    const toggleEdit = (value) => {
        setSelectedValue(value)
        setFormData({
            description: value.description,
            eventDate: value.eventDate,
        })


        setIsEditModalOpen(true)
    }
    //CancelEdit
    const cancelEdit = () => {
        setIsEditModalOpen(false)
    }

    //handleChange for Edit
    const handleChange =(e) =>{
        const [name, value] = e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    //handleEdit save

    const handleSaveEdit =() =>{
        
    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 p-8">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center bg-white shadow-lg rounded-xl p-6">
                <h1 className="text-4xl font-bold text-blue-700">🎉 Celebration Planner 🎉</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Keep track of birthdays, anniversaries, and all your special events!
                </p>
            </div>

            {/* Input Section */}
            <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-4">
                    <input
                        type="date"
                        className="flex-1 p-3 border-2 border-gray-300 rounded-lg text-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={newEventDate}
                        onChange={(e) => { setNewEventDate(e.target.value) }
                        }

                    />
                    <input
                        type="text"
                        placeholder="Enter your Memorable Moment"
                        className="flex-1 p-3 border-2 border-gray-300 rounded-lg text-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={newDescription}
                        onChange={(e) => { setNewDescription(e.target.value) }}
                    />
                    <button className="bg-green-500 px-6 py-3 text-white font-bold rounded-lg hover:bg-green-700 transition" onClick={addCelebration}>
                        ADD CELEBRATION
                    </button>
                </div>
            </div>

            {/* Celebrations Section */}
            <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Upcoming Celebrations</h2>
                {celebrations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {celebrations.map((celebration) => (
                            <div
                                key={celebration._id}
                                className="border border-gray-300 rounded-lg p-4 shadow-md bg-gradient-to-r from-green-50 to-blue-50"
                            >
                                <p className="text-xl font-semibold text-blue-800">{celebration.description}</p>
                                <p className="text-gray-600">
                                    📅 {new Date(celebration.eventDate).toDateString()}
                                </p>
                                <div className=' flex justify-end'>
                                    <button
                                        className="p-4 text-xl"
                                        onClick={()=>toggleEdit(celebration)}><MdModeEdit /></button>
                                    <button><MdDelete /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center">No upcoming celebrations found.</p>
                )}
            </div>

            {/*Edit Modal*/ }

            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Your Celebration</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block font-medium mb-2">Event Name</label>
                                <input type="text"
                                    className="w-full p-3 border rounded-lg focus:outline-none"
                                    name='description'
                                    value={formData.description}
                                    onChange={handleChange}
                                />


                            </div>
                            <div className="mb-4">
                                <label className="block font-medium mb-2">Event Name</label>
                                <input type="date"
                                    className="w-full p-3 border rounded-lg focus:outline-none"
                                    name='eventDate'
                                    value={formData.eventDate.split('T')[0]}   
                                    onChange={handleChange}

                                />


                            </div>

                        </form>
                        <button
                            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                            onClick={cancelEdit}>
                            Cancel
                        </button>
                        <button className="px-4 py-2 bg-green-300 rounded-lg hover:bg-gray-400"

                        >Save
                        </button>


                    </div>

                </div>

            )}


        </div>
    );
};

export default Celebrations;
