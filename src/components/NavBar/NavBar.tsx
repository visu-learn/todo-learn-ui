'use client';

import React, { FC } from 'react';
import styles from './NavBar.module.scss';
import profileTestImg from '../../assets/imgs/profile.png';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <nav className='w-full text-white shadow-sm text-gray-500 px-20 py-3 flex justify-between items-center'>
    <div className='text-lg font-bold'>Todo Learn</div>
    <button
      className='block md:hidden text-white'
      onClick={() => {
        const sidebar = document.getElementById('sidebar');
        sidebar?.classList.toggle('hidden');
      }}
    >
      ☰
    </button>
    <ul className='hidden md:flex space-x-6 items-center'>
      <li className='hover:text-gray-200 cursor-pointer'>Home</li>

      <img
        alt='photo'
        src={profileTestImg.src}
        className='w-10 h-10 rounded-full'
      />
    </ul>
  </nav>
);

export default NavBar;
