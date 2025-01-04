import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { username } = useParams(); // Extract the username from the URL

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-800 overflow-hidden">
      {/* Background Galaxy Animation */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full animate-pulse opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Glowing Nebula Effect */}
      <div className="absolute inset-0 flex justify-center items-center opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-800 animate-pulse opacity-50"></div>
      </div>

      {/* Welcome Message with Typing Animation and Galaxy Glow */}
      <h1 className="text-6xl font-extrabold text-white overflow-hidden whitespace-nowrap border-r-4 border-white animate-typing glow z-10">
        <span className="inline-block">{`Welcome, ${username}!`}</span>
      </h1>

      {/* Floating Emojis with Space-like Effect */}
      <div className="flex space-x-6 mt-6 z-10 animate-bounce-in">
        <span className="text-5xl animate-float">🎉</span>
        <span className="text-5xl animate-float">🌟</span>
        <span className="text-5xl animate-float">✨</span>
      </div>

      {/* Motivational Message with Fade-in and Slide-up */}
      <p className="text-lg font-medium text-white mt-10 opacity-0 animate-fade-in slide-up z-10">
        Today is your day to shine! 🌈
      </p>

      {/* Interactive Button with Hover Effect */}
      <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold text-lg rounded-lg shadow-lg transform hover:scale-110 hover:bg-pink-600 transition-all duration-500 ease-out z-10">
        Let’s Get Started 🚀
      </button>
    </div>
  );
};

export default Dashboard;
