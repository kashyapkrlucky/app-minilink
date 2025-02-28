import React from 'react';

import { XCircleIcon } from '@heroicons/react/24/outline';

// eslint-disable-next-line react/prop-types
function Alerts({ type, text, setMessage }) {
    const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';
    return (
        <div className={'flex flex-row justify-between rounded-sm text-left shadow-xl py-2 px-4 w-2/4 mb-4 ' + bgColor}>
            <div className='flex flex-row items-center gap-2 text-white'>
                <span className='text-md font-medium'>{type === 'error' ? 'Error!' : 'Success'}</span>
                <span className='text-sm'>{text}</span>
            </div>

            <div className='flex flex-row justify-between items-center'>
                <button className='primary' onClick={() => setMessage({ text: '', type: '' })}>
                    <XCircleIcon className='w-8 text-white' />
                </button>
            </div>

        </div>
    )
}

export default Alerts