import React from 'react';
import { Link, Outlet, useFetcher, useParams } from 'react-router-dom';
import { FaTachometerAlt, FaList, FaCalendarAlt, FaBirthdayCake, FaDumbbell, FaSignOutAlt, FaMoneyBillAlt } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import useFetch from "../hooks/useFetch"
import { useEffect } from 'react';
import { useState } from 'react';
const Layout = () => {
  const { username } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;

  // Use the custom hook directly
  const { data: profileData, loading: profileLoading } = useFetch(`${apiUrl}/api/user/${username}`);



  // Define the menu items
  const menuItems = [
    {
      name: 'Dashboard',
      path: `/Layout/${username}/Dashboard`,
      icon: <FaTachometerAlt />
    },
    {
      name: 'Daily Routine',
      path: `/Layout/${username}/DailyRoutine`,
      icon: <FaCalendarAlt />
    },
    {
      name: 'Celebrations',
      path: `/Layout/${username}/Celebrations`,
      icon: <FaBirthdayCake />
    },
    {
      name: 'Expenses',
      path: `/Layout/${username}/Expenses`,
      icon: <FaMoneyBillAlt />
    },
    {
      name: 'Report',
      path: `/Layout/${username}/Report`,
      icon: <FaDumbbell />
    },
    {
      name: 'Settings',
      path: `/Layout/${username}/Settings`,
      icon: <IoMdSettings />

    },
    {
      name: 'Logout',
      path: `/Layout/${username}/Logout`,
      icon: <FaSignOutAlt />
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden font-sans">
      {/* Sidebar */}
      <nav className="w-60 bg-gradient-to-b from-teal-700 via-customTeal to-teal-800 p-5 shadow-lg text-white">

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-8">
          {profileLoading ? (
            <div className="w-24 h-24 rounded-full bg-gray-200 animate-pulse shadow-md" />
          ) : profileData?.profileImage ? (
            <img
              src={`${apiUrl}${profileData.profileImage}`}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg transition duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-24 h-24 rounded-full flex items-center justify-center border-4 border-gray-300 shadow-md bg-white">
              <span className="text-gray-400 text-4xl font-bold">?</span>
            </div>
          )}
          <h1 className="font-semibold text-white mt-3 text-base text-center">{username}</h1>
        </div>

        {/* Navigation */}
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center p-2 rounded-lg hover:bg-teal-600 transition-colors duration-300 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="ml-3 text-sm font-medium group-hover:text-gray-200">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Optional footer or version */}
        <div className="mt-auto text-xs text-teal-100 opacity-50 text-center pt-10">
          © 2025 Copyrights
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-5 bg-gray-100 overflow-auto">
        <Outlet />
      </main>
    </div>

  );
};

export default Layout;