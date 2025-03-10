/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const AppBadge = ({ label, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-200 text-green-800",
    warning: "bg-yellow-200 text-yellow-800",
    danger: "bg-red-200 text-red-800",
    info: "bg-blue-200 text-blue-800",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-semibold rounded-full ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
};

const AppChip = ({ label, onRemove, variant = "default", className = "" }) => {
  return (
    <div
      className={`flex items-center space-x-2 px-3 py-1 text-xs font-semibold rounded-full ${className}`}
    >
      <span>{label}</span>
      {onRemove && (
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={onRemove}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export { AppBadge, AppChip };
