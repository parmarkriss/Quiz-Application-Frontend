import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-700 text-white p-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-2xl font-bold text-white no-underline" href="#">
          Quiz Application
        </a>
        <div className="hidden lg:flex flex-grow justify-end items-center">
          <ul className="flex space-x-4 ">
            <li>
              <Link to={'/'} className='text-white hover:text-gray-200 flex items-center no-underline me-3 text-lg hover:underline'>
                Home
              </Link>
            </li>
            <li>
              <Link to={'/quiz'} className='text-white hover:text-gray-200 flex items-center no-underline me-3 text-lg hover:underline'>
                Quizzes
              </Link>
            </li>
            <li>
              <Link to={'/score-summary'} className='text-white hover:text-gray-200 flex items-center no-underline me-3 text-lg hover:underline'>
                ScoreSummary
              </Link>
            </li>
          </ul>
        </div>


        <div className="lg:hidden">
          <button
            className={`bg-red-600 text-white p-2 rounded ${isMenuOpen ? 'bg-red-800' : 'bg-blue-500'}`}
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col p-4 ">
            <li className="py-2">
              <Link to={'/'} className='text-white hover:text-gray-200 flex items-center no-underline'>
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link to={'/quiz'} className='text-white hover:text-gray-200 flex items-center no-underline'>
                Quizzes
              </Link>
            </li>
            <li className="py-2">
              <Link to={'/score-summary'} className='text-white hover:text-gray-200 flex items-center no-underline'>
                ScoreSummary
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;