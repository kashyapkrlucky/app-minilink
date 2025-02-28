import React, { useState, useEffect } from 'react';
import HttpClient from '../../services/httpClient';
import Avatar from '../Common/Avatar';
import { Link } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/outline';

function SearchUser() {
    const [srcText, setSrcText] = useState('');
    const [users, setUsers] = useState([]);
    const getUsers = async (text) => {
        const response = await HttpClient.get(`api/users/search/${text}`);
        const { data } = await response.data;
        setUsers(data);
    }

    useEffect(() => {
        if (srcText.length > 3) {
            getUsers(srcText);
        } else {
            setUsers([]);
        }
        return () => {
            console.log('cleaning users');
        };
    }, [srcText]);
    return (
        <div className='w-full flex-1 relative px-4 lg:px-2'>
            <input className='w-full py-2 px-4 bg-blue-500 rounded-md outline-none text-white placeholder-gray-100' type='text' placeholder='Search People' value={srcText} onChange={(e) => setSrcText(e.target.value)} />
            {srcText.length > 1 && <button className='absolute right-2 top-2' onClick={() => setSrcText('')}>
                <XCircleIcon className='w-6 h-6 text-white' />
            </button>}
            {
                users && users.length > 0 ?
                    <div className='bg-white p-2 border shadow-sm rounded-md absolute w-96' style={{ top: '52px' }}>
                        {users.map(user => (
                            <Link key={user._id} className='flex flex-row rounded-md items-center p-2 gap-4 hover:bg-gray-100' to={'/profile/' + user._id}>
                                <Avatar user={user} />
                                <h3 className='font-medium' onClick={() => setSrcText('')}>{user.fullName}</h3>
                            </Link>))}
                    </div>
                    : (srcText.length > 3 && <div className='bg-white p-2 border shadow-sm rounded-md absolute w-96' style={{ top: '52px' }}>
                        <span className='text-xs'>No Search Results...</span></div>)
            }


        </div>
    )
}

export default SearchUser
