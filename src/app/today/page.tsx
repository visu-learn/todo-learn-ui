'use client';

import Task from '@/components/TaskTopic/TaskCard/TaskCard';
import {
  DateInput,
  DatePicker,
  Input,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';

export default function Home() {
  const subjects = [
    { name: 'Math', progress: 80 },
    { name: 'Science', progress: 50 },
    { name: 'History', progress: 30 },
  ];

  return (
    <div className='rounded  p-8'>
      <h1 className='text-5xl font-bold mb-4'>Today</h1>
      <div className='flex col w-full'>
        <div className='w-[60%]'>
          <Task className='my-2' />
          <Task />
          <Task />
          <Task />
        </div>
        <div className='bg-gray-50 min-h-[80vh] w-[800px]'>
          <h2 className='text-2xl text-gray-400 font-bold mb-4'>Task:</h2>
          <Select label='Subject' placeholder='select subject'>
            <SelectItem key={2}>subject one</SelectItem>
            <SelectItem key={1}>subject 2</SelectItem>
            <SelectItem key={3}>subject 3</SelectItem>
          </Select>
          <Input label='Topic' placeholder='enter concerned topic' />
          <Textarea label='Description' placeholder='enter text here' />
          <DatePicker label='Deadline' />
          {/* Add Tag */}
        </div>
      </div>
    </div>
  );
}
