/* eslint-disable react/prop-types */
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import React from 'react'
const alertStyles = {
    success: "bg-green-100 text-green-700 border-green-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
    error: "bg-red-100 text-red-700 border-red-400",
    info: "bg-blue-100 text-blue-700 border-blue-400",
};

const alertIcons = {
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
    info: InformationCircleIcon,
};

const AppAlert = ({ type = "info", message, className = "", onClose }) => {
    const Icon = alertIcons[type];
    return (
        <div className={`border-l-4 p-4 rounded flex items-start gap-3 ${alertStyles[type]} ${className}`}>
            <Icon className="w-5 h-5" />
            <span className="flex-1">{message}</span>
            {onClose && (
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                    ✕
                </button>
            )}
        </div>
    );
};

export default AppAlert