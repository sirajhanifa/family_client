import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { FaTachometerAlt, FaList, FaCalendarAlt, FaBirthdayCake, FaDumbbell, FaSignOutAlt, FaMoneyBillAlt } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";

const Layout = () => {
  const { username } = useParams(); // Extract the username from the URL

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
      name:'Settings',
      path:`/Layout/${username}/Settings`,
      icon:<IoMdSettings />

    },
    {
      name: 'Logout',
      path: `/Layout/${username}/Logout`,
      icon: <FaSignOutAlt />
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <nav className="w-52 bg-customTeal p-4">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="text-white font-bold hover:bg-teal-700 hover:text-gray-200 flex items-center p-2 rounded">
                {item.icon} <span className="ml-2">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className=" flex-1 p-4 bg-gray-100 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;