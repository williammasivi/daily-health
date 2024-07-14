import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="/public/DAILY.png" 
            alt="Daily Health logo" 
            className="h-10 w-auto rounded-full transition-transform transform hover:scale-110 hover:rotate-6"
          />
          <h1 className="text-2xl font-bold">Daily Health</h1>
        </div>
        <button className="block lg:hidden focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <ul className={`lg:flex lg:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} lg:block space-y-4 lg:space-y-0 mt-4 lg:mt-0`}>
          <li>
            <Link to="/" className="block lg:inline-block px-2 py-1 rounded hover:bg-blue-700 transition-colors" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/consultation" className="block lg:inline-block px-2 py-1 rounded hover:bg-blue-700 transition-colors" onClick={toggleMenu}>
              Consultations
            </Link>
          </li>
          <li>
            <Link to="/medication" className="block lg:inline-block px-2 py-1 rounded hover:bg-blue-700 transition-colors" onClick={toggleMenu}>
              Médication
            </Link>
          </li>
          <li>
            <Link to="/pharmacies" className="block lg:inline-block px-2 py-1 rounded hover:bg-blue-700 transition-colors" onClick={toggleMenu}>
              Pharmacies
            </Link>
          </li>
          <li>
            <Link to="/records" className="block lg:inline-block px-2 py-1 rounded hover:bg-blue-700 transition-colors" onClick={toggleMenu}>
              Dossiers Médicaux
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
