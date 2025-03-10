/* eslint-disable react/prop-types */
import React from "react";

const AppToggle = ({ checked, onChange, label, className = "" }) => {
  return (
    <label className={`flex items-center space-x-2 cursor-pointer ${className}`}>
      <div
        className={`relative w-10 h-5 flex items-center rounded-full p-1 transition-all 
        ${checked ? "bg-blue-500" : "bg-gray-300"}`}
        onClick={onChange}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform 
          ${checked ? "translate-x-5" : "translate-x-0"}`}
        ></div>
      </div>
      {label && <span className="text-gray-700 text-sm">{label}</span>}
    </label>
  );
};

export default AppToggle;
