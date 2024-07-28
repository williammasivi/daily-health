import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/DAILY.png" alt="Logo" className="h-10 w-10" />
        </div>

        {/* Project Name */}
        <h1 className="text-xl font-bold">daily-health</h1>

        {/* Avatar */}
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-3xl" />
        </div>
      </div>
    </header>
  );
}
