import React, { FC } from 'react';
import styles from './SideBar.module.scss';
import Link from 'next/link';
import { Dashboard } from '@mui/icons-material';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  const subjects = ['subject-one', 'computer graphics', 'java', 'Subject-3']; // Dynamically add subjects here

  return (
    <div
      id='sidebar'
      className='rounded-lg px-8  h-[90%] mx-1 w-[300px] bg-gray-100 text-gray-700 hidden md:block'
    >
      <div className='px-4 py-6 text-lg font-bold border-b border-gray-600'>
        Menu
      </div>

      {/* Tasks Section */}
      <div className='hover:bg-gray-300 cursor-pointer my-4 flex items-center py-2 border-b border-gray-400'>
        <Dashboard />
        <h3 className='px-2 text-sm font-semibold uppercase text-gray-400'>
          DashBoard
        </h3>
      </div>

      {/* Tasks Section */}
      <div className='mt-4 pb-4 border-b border-gray-400'>
        <h3 className='px-4 text-sm font-semibold uppercase text-gray-400'>
          Tasks
        </h3>
        <ul className='mt-2 ml-3 space-y-2'>
          <Link href={'/today'}>
            <li className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>
              Today
            </li>
          </Link>
          <li className='hover:bg-gray-300 rounded-lg px-4 py-2 cursor-pointer'>
            Upcoming Tasks
          </li>
          <li className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>
            Calendar
          </li>
        </ul>
      </div>

      {/* Subjects Section */}
      <div className='mt-6'>
        <h3 className='px-4 text-sm font-semibold uppercase text-gray-400'>
          Subjects
        </h3>
        <ul className='mt-2 ml-3 space-y-2'>
          <li className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>
            all subjects
          </li>
          {subjects.map((subject, index) => (
            <li
              key={index}
              className='hover:bg-gray-300 px-4 py-2 cursor-pointer'
            >
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
