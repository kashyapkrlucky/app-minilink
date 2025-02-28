import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Cog6ToothIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { UserContext } from '../../contexts/UserContext';
import Avatar from '../Common/Avatar';
import SearchUser from './SearchUser';
import { AppName } from '../../services/utils';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  }

  const navigation = [
    { name: 'My Profile', href: `/profile/${user && user._id}`, icon: <UserCircleIcon className='w-6 h-6' /> },
    { name: 'Settings', href: '/settings', icon: <Cog6ToothIcon className='w-6 h-6' /> }
  ]
  
  return (
    <section className="min-h-full bg-gray-100 flex flex-col relative">
      <header className='bg-blue-600'>
        <div className="mx-auto max-w-7xl flex lg:h-16 items-center">
          <div className='w-full flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-1/5 flex flex-col lg:flex-row gap-8 items-center py-4'>
              <NavLink className='font-bold text-xl text-gray-100' to={'/dashboard'}>
                {AppName}
              </NavLink>
            </div>
            <div className='lg:w-2/5 flex flex-col lg:flex-row gap-8 items-center'>
              <SearchUser />
            </div>
            <div className='lg:w-2/5 flex flex-row p-4 lg:p-0 gap-8 items-center justify-center lg:justify-end'>
              {/* <NavLink to="/blog" className={'text-gray-300'}>Blogs</NavLink>
              <NavLink to="/community/list" className={'text-gray-300'}>Communities</NavLink>
             
              <NavLink to="/messages">
                <ChatBubbleLeftEllipsisIcon className='w-6 h-6 text-gray-300' />
              </NavLink> */}

              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <div className='bg-white rounded-full'>{user && <Avatar user={user} />}</div>
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {navigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                  <MenuItem>
                    <button className='w-full text-sm px-4 py-2 text-left' onClick={onLogout}>Logout</button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </header>
      {children}
    </section>
  );
}

export default Layout;
