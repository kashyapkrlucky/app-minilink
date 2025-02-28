import React from 'react'

// eslint-disable-next-line react/prop-types
function Button({ label, classes }) {
    return (
        <button
            type="submit"
            className={"rounded-md px-3 py-3 text-sm font-medium leading-6 text-white uppercase shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " + classes}
        >
            {label}
        </button>
    )
}

export default Button