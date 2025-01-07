import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const Layout = () => {
  const { username } = useParams(); // Extract the username from the URL

  // Define the menu items
  const menuItems = [
    {
      name: 'Dashboard',
      path: `/Layout/${username}/Dashboard`
    },
    {
      name: 'ToDo List',
      path: `/Layout/${username}/todolist`
    },
    {
      name: 'Daily Routine',
      path: `/Layout/${username}/DailyRoutine`
    },
    {
      name: 'Celebrations',
      path: `/Layout/${username}/Celebrations`
    },
    {
      name: 'Logout',
      path: `/Layout/${username}/Logout`
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="w-52 bg-customTeal p-4">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="text-white hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
