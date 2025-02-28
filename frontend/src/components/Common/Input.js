/* eslint-disable react/prop-types */
import React from 'react'

function Input(props) {
    // block w-full rounded-md border-0 p-2 bg-slate-900 text-gray-200 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-700">
                {props.label}
            </label>
            <input
                {...props}
                className="rounded-md py-3 px-4 outline-none text-gray-900 shadow-sm border border-slate-700 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            />
        </div>
    )
}

export default Input