/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const AppAccordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-md overflow-hidden mb-2">
            <button
                className="w-full bg-gray-100 text-left p-4 font-semibold flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title} <span>{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && <div className="p-4 border-t">{children}</div>}
        </div>
    );
};

export default AppAccordion