/* eslint-disable react/prop-types */
import React from 'react'

function NoResults({ content }) {
    return (
        <div className='text-sm text-slate-600 py-1 text-center'>
            <span className='text-xs'>{content}</span>
        </div>
    )
}

export default NoResults