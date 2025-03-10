/* eslint-disable react/prop-types */
import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react'

const AppDrawer = ({ isOpen, onClose, children }) => {
    return (
        <div className={`fixed inset-0 z-50 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transform bg-white shadow-xl w-80 p-4`}>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">
                <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="mt-8">{children}</div>
        </div>
    );
};

export default AppDrawer