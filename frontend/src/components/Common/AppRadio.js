/* eslint-disable react/prop-types */
import React from "react";

const AppRadio = ({ label, name, checked, onChange, className = "" }) => {
    return (
        <label className={`flex items-center space-x-2 cursor-pointer ${className}`}>
            <input
                type="radio"
                name={name}
                checked={checked}
                onChange={onChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300"
            />
            <span className="text-gray-700 text-sm">{label}</span>
        </label>
    );
};

export default AppRadio;