// LoadingContext.js
import React, { createContext, useState, useContext } from 'react';
import Loading from '../components/Layout/Loading';


const LoadingContext = createContext();

// eslint-disable-next-line react/prop-types
export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const showLoading = (value) => {
        setLoading(value);
    }
    return (
        <LoadingContext.Provider value={{ loading, setLoading, showLoading }}>
            {children}
            <Loading/>
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
