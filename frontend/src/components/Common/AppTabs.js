/* eslint-disable react/prop-types */
import React from 'react'

const AppTabs = ({ tabs = [], activeIndex = 0, onTabChange }) => {
    return (
        <div>
            <div className="flex border-b border-gray-200">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 focus:outline-none ${index === activeIndex ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                        onClick={() => onTabChange(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4">
                {tabs[activeIndex]?.content}
            </div>
        </div>
    );
};

export default AppTabs