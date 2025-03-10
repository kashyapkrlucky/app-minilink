/* eslint-disable react/prop-types */
import React from "react";

const AppCheckbox = ({ label, checked, onChange, className = "" }) => {
  return (
    <label className={`flex items-center space-x-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
      />
      <span className="text-gray-700 text-sm">{label}</span>
    </label>
  );
};

export default AppCheckbox;