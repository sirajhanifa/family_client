import React, { useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import Celebrations from './Celebrations';
import axios from 'axios';


const EditCeleb = ({celebration}) => {

    // const apiUrl = import.meta.ent.VITE_API_URL;
    
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        description:'',
        date: '',
    })

    const toggleEdit = () => {
        setIsEditModalOpen(true)
        setFormData({
            description: celebration.description,
            date: celebration.eventDate,
        })
        
    }
    const cancelEdit = () => {
        setIsEditModalOpen(false)
    }

    const handleChange =(e) =>{

        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]:value,
        })

    }

    const handleEditSave = async() =>{
        try{
            const payload = {
                description: formData.description,
                eventDate: formData.date,
            }
            // const response = await axios.put(`${apiUrl}/api/editcelebration/${celebration.id}`,payload)
            console.log(celebration.id);
            

        }
        catch(error){
            console.log(error);
            
        }

    }

    return (
        <>
            <button onClick={toggleEdit} className="p-4 text-xl"><MdModeEdit /></button>

            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Your Celebration</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block font-medium mb-2">Event Name</label>
                                <input type="text"
                                    className="w-full p-3 border rounded-lg focus:outline-none"
                                    value={formData.description}
                                    name='description'
                                    onChange={handleChange}
                                />

                            </div>
                            <div className="mb-4">
                                <label className="block font-medium mb-2">Event Date</label>
                                <input type="date"
                                    className="w-full p-3 border rounded-lg focus:outline-none"
                                    value={formData.date.split('T')[0]}   
                                    name='date'     
                                    onChange={handleChange}                         />

                            </div>

                        </form>


                        <button
                            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                            onClick={cancelEdit}>
                            Cancel
                        </button>
                        <button className="px-4 py-2 bg-green-300 rounded-lg hover:bg-gray-400"
                        onClick={handleEditSave}
                        >Save
                        </button>

                    </div>

                </div>
            )}
        </>


    )
}

export default EditCeleb