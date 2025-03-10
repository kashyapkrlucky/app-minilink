import React from 'react'

// eslint-disable-next-line react/prop-types
const AppPagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    className={`px-3 py-1 border rounded-md ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default AppPagination