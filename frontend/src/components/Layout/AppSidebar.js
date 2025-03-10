/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const AppSidebar = ({ links = [], className = "" }) => {
    const [isOpen, setIsOpen] = useState(true);
  
    return (
      <div className={`relative h-screen ${isOpen ? "w-64" : "w-16"} bg-gray-800 text-white transition-all duration-300 ${className}`}>
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
        <div className="mt-12 flex flex-col space-y-4 p-4">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="block py-2 px-4 rounded hover:bg-gray-700">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    );
  };

export default AppSidebar