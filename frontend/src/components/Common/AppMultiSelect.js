/* eslint-disable react/prop-types */
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

const AppMultiSelect = ({ options, selectedOptions, setSelectedOptions }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOption = (option) => {
      setSelectedOptions((prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option]
      );
    };
  
    return (
      <div className="relative w-64">
        <button
          className="w-full px-4 py-2 border rounded-md flex justify-between items-center bg-white shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {selectedOptions.length > 0 ? selectedOptions.join(", ") : "Select options"}
          </span>
          <ChevronDownIcon className="w-5 h-5 text-gray-600" />
        </button>
        {isOpen && (
          <div className="absolute w-full bg-white border mt-2 rounded-md shadow-lg z-10">
            {options.map((option) => (
              <div
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                onClick={() => toggleOption(option)}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => toggleOption(option)}
                />
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

export default AppMultiSelect