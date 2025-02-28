/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import Modal from '../Layout/Modal';


function DeleteItem({ deleteFeed, id }) {
    const [isOpen, setIsOpen] = useState('');
    const toggleModal = () => {
        setIsOpen((prev) => {
            return !prev;
        });
    }
    return (
        <React.Fragment>
            <button onClick={toggleModal}>
                <TrashIcon className='w-4 h-4 text-slate-400' />
            </button>

            <Modal title={'Delete'} isOpen={isOpen} onClose={() => toggleModal(false)}>
                <div className='flex flex-col'>
                    <p className='text-slate-500 pb-4'>Are you sure you want to delete it?</p>
                    <div className='flex justify-end gap-4'>
                        <button className='border-2 rounded-md text-sm px-4 py-2 radius-4' onClick={toggleModal}>Cancel</button>
                        <button className='bg-red-600 rounded-md text-white text-sm px-6 py-2 radius-4' onClick={() => {deleteFeed(id);toggleModal(false);}}>Yes</button>
                    </div>
                </div>
            </Modal>

        </React.Fragment>
    )
}

export default DeleteItem;
