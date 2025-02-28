import React, { createContext, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create a Context
const ToastContext = createContext();

// Create a Provider component
// eslint-disable-next-line react/prop-types
export const ToastProvider = ({ children }) => {
    const showError = (message) => {
        toast.error(message, {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false
        });
    };

    return (
        <ToastContext.Provider value={{ showError }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
};

// Custom hook to use the toast context
export const useToast = () => useContext(ToastContext);
