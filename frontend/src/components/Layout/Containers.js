/* eslint-disable react/prop-types */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const AppContainer = ({ children, className = "" }) => {
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

const AppWrapper = ({ children, className = "" }) => {
    return (
        <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
            {children}
        </div>
    );
};
const AppCard = ({ children, header, footer, onClick, className = "" }) => {
    return (
        <div
            className={`bg-white shadow-lg rounded-lg overflow-hidden ${onClick ? "cursor-pointer hover:shadow-xl transition-shadow" : ""} ${className}`}
            onClick={onClick}
        >
            {header && <div className="border-b px-6 py-3 font-semibold text-gray-800">{header}</div>}
            <div className="p-6">{children}</div>
            {footer && <div className="border-t px-6 py-3 text-gray-600">{footer}</div>}
        </div>
    );
};
const AppGrid = ({ children, cols = 3, gap = 4, className = "" }) => {
    return (
        <div className={`grid grid-cols-${cols} gap-${gap} ${className}`}>
            {children}
        </div>
    );
};

const AppFlex = ({ children, align = "center", justify = "center", className = "" }) => {
    return (
        <div className={`flex items-${align} justify-${justify} ${className}`}>
            {children}
        </div>
    );
};
const AppDivider = ({ className = "", text = "" }) => {
    return (
        <div className={`relative flex items-center ${className}`}>
            <div className="flex-grow border-t border-gray-300"></div>
            {text && <span className="px-3 text-gray-500 text-sm">{text}</span>}
            <div className="flex-grow border-t border-gray-300"></div>
        </div>
    );
};
const AppSpinner = ({ size = "6", color = "gray-500", className = "" }) => {
    return (
        <div className={`animate-spin rounded-full border-4 border-${color} border-t-transparent h-${size} w-${size} ${className}`}></div>
    );
};

const AppSkeleton = ({ height = "4", width = "full", className = "" }) => {
    return (
        <div className={`bg-gray-200 animate-pulse h-${height} w-${width} rounded ${className}`}></div>
    );
};

const AppModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 max-w-full p-6">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <XMarkIcon className="w-5 h-5" />
                    </button>
                </div>
                <div>{children}</div>
                <div className="mt-4 flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300">Cancel</button>
                </div>
            </div>
        </div>
    );
};

const AppProgressBar = ({ progress = 50, className = "" }) => {
    return (
        <div className={`w-full bg-gray-200 rounded-full h-3 overflow-hidden ${className}`}>
            <div
                className="bg-blue-500 h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

const AppNavbar = ({ brand = "Brand", links = [] }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">{brand}</div>
                <div className="hidden md:flex space-x-6">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} className="hover:text-gray-300">
                            {link.label}
                        </a>
                    ))}
                </div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <Bars3Icon className="w-6 h-6" />
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-2">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} className="block text-center py-2 border-t border-gray-700 hover:text-gray-300">
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export { AppContainer, AppWrapper, AppCard, AppGrid, AppFlex, AppDivider, AppSpinner, AppSkeleton, AppModal, AppProgressBar, AppNavbar };
