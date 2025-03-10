/* eslint-disable react/prop-types */
import React from 'react'

const AppBreadcrumbs = ({ items = [] }) => {
    return (
        <nav className="text-gray-600 text-sm">
            <ol className="flex space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <a href={item.href} className="hover:underline">{item.label}</a>
                        {index < items.length - 1 && <span className="mx-2">/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default AppBreadcrumbs