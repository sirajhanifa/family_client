import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="w-5/6 h-5/6 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Navbar */}
        <div className="w-full h-16 flex justify-end items-center px-6 border-b bg-white shadow-md">
          <div className="flex gap-4">
            <Button label="Sign In" />
            <Button label="Sign Up" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-white to-purple-100">
          <div className="text-center max-w-2xl px-8">
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
              “Family is not an important thing, it's <span className="text-pink-600">everything</span>.”
            </h1>
            <p className="text-xl text-gray-600 mt-2 italic">
              Cherish every moment with your loved ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
