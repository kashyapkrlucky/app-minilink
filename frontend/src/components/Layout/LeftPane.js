/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Avatar from '../Common/Avatar';
import Moment from 'react-moment';
// import { Link } from 'react-router-dom';
import { CalendarDaysIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
// import NoResults from '../Common/NoResults'

function LeftPane({ user, theme = 'green', children }) {
    const [themeBg, setThemeBg] = useState('');
    useEffect(() => {
        const val = theme === 'purple' ? ' from-indigo-500 via-purple-500 to-pink-500 ' : ' from-emerald-500 via-teal-500 to-teal-500';
        setThemeBg(val);
    }, [theme])

    return (
        <>
            <section className='flex flex-col gap-1 rounded-xl bg-white border border-slate-200'>
                <div className={`flex flex-col items-center gap-2 p-4 rounded-t-xl bg-gradient-to-r ${themeBg}`}>
                    <Avatar user={user} classes={"w-20 h-20 bg-white shadow-md border-2"} />
                    <p className='text-white text-lg'>{user?.fullName}</p>
                </div>
                <div className='flex flex-col gap-4 p-3'>
                    <div className='flex flex-row gap-2 items-center'>
                        <EnvelopeIcon className='w-6 h-6 text-gray-600' />
                        <p className='text-sm'>{user?.email}</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <CalendarDaysIcon className='w-6 h-6 text-gray-600' />
                        <p className='text-sm'>Joined <Moment fromNow>{user?.createdAt}</Moment></p>
                    </div>
                </div>
            </section>
            {children}
        </>
    )
}

export default LeftPane