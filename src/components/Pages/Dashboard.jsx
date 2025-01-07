import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { username } = useParams(); // Extract the username from the URL

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      {/* Gradient Text with Lighting Effect */}
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-glow">
        Welcome, {username}!
      </h1>

      {/* Motivational Message */}
      <p className="text-lg text-gray-300 mt-4">
        Today is your day to shine! 🌟
      </p>
    </div>
  );
};

export default Dashboard;
