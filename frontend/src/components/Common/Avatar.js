import React from 'react'
// import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Avatar({ user = { fullName: 'Test'}, classes = 'h-8 w-8 text-xl', alt = 'image' }) {
    return (
        <>
            {
                user?.avatar ?
                    <img
                        className={"rounded-full " + classes}
                        src={'/avatars/' + user?.avatar}
                        alt={alt}
                    /> :
                    <div className={"rounded-full flex flex-row justify-center items-center border-2 border-slate-500 " + classes}>
                        {user?.fullName && user?.fullName[0]}
                    </div>
            }
        </>
    )
}

export default Avatar