/* eslint-disable react/prop-types */
import React from "react";
import clsx from "clsx";

const AppSelect = ({
  options = [],
  placeholder = "Select an option",
  size = "md",
  variant = "default",
  disabled = false,
  error = "",
  className = "",
  ...props
}) => {
  const baseStyles = "rounded-lg border focus:outline-none transition-all duration-300 w-full";

  const variantStyles = {
    default: "border-gray-300 focus:ring-2 focus:ring-blue-500",
    filled: "bg-gray-100 border-transparent focus:ring-2 focus:ring-blue-500",
    outline: "border border-blue-600 focus:ring-2 focus:ring-blue-500",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const errorStyles = error ? "border-red-500 focus:ring-red-500" : "";

  return (
    <div className="w-full">
      <select
        className={clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          errorStyles,
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        disabled={disabled}
        {...props}
        defaultValue=""
      >
        <option value="" disabled defaultValue>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={option.id || option._id || index} value={option.id || option._id}>
            {option.name || option.value}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default AppSelect;
