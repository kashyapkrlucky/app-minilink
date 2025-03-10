import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

const alertIcons = {
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
    info: InformationCircleIcon,
};
const alertStyles = {
    success: "bg-green-100 text-green-700 border-green-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
    error: "bg-red-100 text-red-700 border-red-400",
    info: "bg-blue-100 text-blue-700 border-blue-400",
};


// eslint-disable-next-line react/prop-types
const AppToast = ({ type = "info", message, duration = 3000, position = "bottom-right" }) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }, [duration]);
  
    if (!visible) return null;
  
    const Icon = alertIcons[type];
    const positionClasses = {
      "top-left": "top-5 left-5",
      "top-right": "top-5 right-5",
      "bottom-left": "bottom-5 left-5",
      "bottom-right": "bottom-5 right-5",
    };
  
    return (
      <div className={`fixed flex items-center gap-3 p-4 rounded shadow-lg ${alertStyles[type]} ${positionClasses[position]}`}>
        <Icon className="w-5 h-5" />
        <span>{message}</span>
        <button onClick={() => setVisible(false)} className="text-gray-500 hover:text-gray-700">
          <XMarkIcon className="w-4 h-4" />
        </button>
      </div>
    );
  };

export default AppToast