import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { username } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [imagePath, setImagePath] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Fetch existing image path
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/user/${username}`);
        if (res.data.profileImage) {
          setImagePath(res.data.profileImage);
        }
      } catch (err) {
        console.error('Failed to load image');
      }
    };
    fetchProfile();
  }, [username]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert('Choose a file first');
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('username', username);

    try {
      const res = await axios.post(`${apiUrl}/api/upload`, formData);
      setImagePath(res.data.profileImage);
      alert('Upload successful!');
    } catch (err) {
      alert('Upload failed');
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Profile</h2>

      {imagePath && !preview && (
        <img
          src={`${apiUrl}${imagePath}`}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover mb-4 shadow-md"
        />
      )}

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover mb-4 shadow-md"
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
};

export default Profile;
