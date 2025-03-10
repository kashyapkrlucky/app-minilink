/* eslint-disable react/prop-types */
import React from "react";

const AppTooltip = ({ children, text, position = "top", className = "" }) => {
    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
    };

    return (
        <div className="relative flex items-center group">
            {children}
            <span
                className={`absolute whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${positionClasses[position]} ${className}`}
            >
                {text}
            </span>
        </div>
    );
};

export default AppTooltip;
