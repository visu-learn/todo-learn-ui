'use client';

import { BarChart, LineChart } from '@mui/x-charts';

export default function Home() {
  const subjects = [
    { name: 'Math', progress: 80 },
    { name: 'Science', progress: 50 },
    { name: 'History', progress: 30 },
  ];

  return (
    <div className='rounded bg-gray-50 p-8'>
      <h1 className='text-5xl font-bold mb-4'>Dashboard</h1>

      {/* Stats Section */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <h2 className='text-xl font-semibold'>Total Tasks</h2>
          <p className='text-2xl font-bold text-blue-600'>24</p>
        </div>
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <h2 className='text-xl font-semibold'>Pending Tasks</h2>
          <p className='text-2xl font-bold text-red-600'>8</p>
        </div>
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <h2 className='text-xl font-semibold'>Today's Tasks</h2>
          <p className='text-2xl font-bold text-green-600'>5</p>
        </div>
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <h2 className='text-xl font-semibold'>Average Quiz Score</h2>
          <p className='text-2xl font-bold text-purple-600'>85%</p>
        </div>
      </div>

      {/* Learning Categories Section */}
      <div className='bg-white shadow-md p-6 rounded-lg mb-6'>
        <h2 className='text-lg font-semibold mb-4'>Learning Categories</h2>
        <div className='space-y-4'>
          {subjects.map((subject, index) => (
            <div key={index} className='flex items-center justify-between'>
              <span className='text-gray-700'>{subject.name}</span>
              <div className='w-2/3 bg-gray-200 rounded-full h-4'>
                <div
                  className='bg-blue-600 h-4 rounded-full'
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
              <span className='ml-2 text-gray-600'>{subject.progress}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Productivity Metrics Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <h2 className='text-lg font-semibold'>Completion Rate</h2>
          <p className='text-2xl font-bold text-green-600'>75%</p>
        </div>
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <h2 className='text-lg font-semibold'>Daily Streak</h2>
          <p className='text-2xl font-bold text-blue-600'>7 Days</p>
        </div>
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <h2 className='text-lg font-semibold'>Most Productive Day</h2>
          <p className='text-lg text-gray-700'>Tuesday</p>
        </div>
      </div>

      {/* Motivational Widget */}
      <div className='bg-white shadow-md p-6 rounded-lg mb-6'>
        <h2 className='text-lg font-semibold mb-4'>Motivational Quote</h2>
        <blockquote className='italic text-gray-600 border-l-4 pl-4 border-blue-600'>
          "The best way to predict the future is to create it." – Peter Drucker
        </blockquote>
      </div>

      {/* Charts Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
        <div className='bg-white shadow-md p-6 rounded-lg'>
          <h2 className='text-lg font-semibold mb-4'>Task Progress</h2>
          <div className='h-48 bg-gray-200 rounded-lg flex items-center justify-center'>
            <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={250}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
        </div>
        <div className='bg-white shadow-md p-6 rounded-lg'>
          <h2 className='text-lg font-semibold mb-4'>Subject Progress</h2>
          <div className='h-48 bg-gray-200 rounded-lg flex items-center justify-center'>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={500}
              height={250}
            />
          </div>
        </div>
      </div>

      {/* List Section */}
      <div className='bg-white shadow-md p-6 rounded-lg'>
        <h2 className='text-lg font-semibold mb-4'>Upcoming Deadlines</h2>
        <ul className='space-y-2'>
          <li className='flex justify-between items-center p-2 bg-gray-50 rounded-lg'>
            <span>Math Homework</span>
            <span className='text-sm text-gray-500'>Due: 12/22/2024</span>
          </li>
          <li className='flex justify-between items-center p-2 bg-gray-50 rounded-lg'>
            <span>Science Quiz</span>
            <span className='text-sm text-gray-500'>Due: 12/23/2024</span>
          </li>
          <li className='flex justify-between items-center p-2 bg-gray-50 rounded-lg'>
            <span>Project Report</span>
            <span className='text-sm text-gray-500'>Due: 12/25/2024</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
