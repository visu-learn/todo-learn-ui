import { useState } from 'react';
import ProjectCard from '../ProjectCard';
import {
  Accordion,
  AccordionItem,
  DatePicker,
  Input,
  Progress,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import ProjectMilestones from '../ProjectMileStone/ProjectMileStone';
import ProjectAIReview from '../ProjectAIReview/ProjectAIReview';

const ProjectView = () => {
  return (
    <div className='flex'>
      <div className='w-[400px]'>
        <ProjectCard className='my-2' isSelected />
        <ProjectCard className='my-2' />
        <ProjectCard className='my-2' />
        <ProjectCard className='my-2' />
        <ProjectCard className='my-2' />
      </div>
      <div className='w-full'>
        <Progress
          classNames={{
            base: 'max-w-full',
            track: 'drop-shadow-md border border-default',
            indicator: 'bg-gradient-to-r from-red-500 to-green-500',
            label: 'tracking-wider font-medium text-default-600',
            value: 'text-foreground/60',
          }}
          className='my-3'
          label='Progress Completion'
          radius='sm'
          showValueLabel={true}
          size='sm'
          value={90}
        />

        <Progress
          classNames={{
            base: 'max-w-full',
            track: 'drop-shadow-md border border-default',
            indicator: 'bg-gradient-to-r from-red-600 to-green-600',
            label: 'tracking-wider font-medium text-default-600',
            value: 'text-foreground/60',
          }}
          className='my-3'
          label='Score AI (Review)'
          radius='sm'
          showValueLabel={true}
          size='sm'
          value={40}
        />

        <div>
          <h3 className='font-bold text-lg text-gray-500'>General Info</h3>
          <div>
            <div className='flex col my-2 gap-2'>
              <Select label='Subject' placeholder='select tag'>
                <SelectItem key={2}>Tag 1</SelectItem>
                <SelectItem key={1}>Tag 2</SelectItem>
                <SelectItem key={3}>Tag 3</SelectItem>
              </Select>
              <Input label='Topic' placeholder='enter concerned topic' />
            </div>
            <div className='my-2'>
              <Textarea
                label='Description'
                readOnly
                value={'ceci est un text non editable'}
                placeholder='enter text here'
              />
            </div>

            <div className='flex col my-2 gap-2'>
              <DatePicker label='Start Date' />
              <DatePicker label='Deadline' />
            </div>
          </div>
        </div>

        <ProjectMilestones />

        <ProjectAIReview />
      </div>
      {/* Project Overview */}
      {/* <h1 className='text-2xl font-bold mb-2'>{project.title}</h1>
      <p className='text-gray-700 mb-4'>{project.description}</p>
      <div className='mb-6'>
        <h2 className='text-lg font-semibold'>Overall Progress</h2>
        <div className='w-full bg-gray-300 rounded-full h-4'>
          <div
            className='bg-green-500 h-4 rounded-full'
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <p className='text-sm mt-1'>{project.progress}% Complete</p>
      </div> */}

      {/* Topics Breakdown */}
      {/* <h2 className='text-lg font-semibold mb-2'>Topics Breakdown</h2>
      <ul className='mb-6 space-y-4'>
        {project.topics.map((topic) => (
          <li
            key={topic.id}
            className={`p-4 border rounded-lg ${
              topic.completed ? 'bg-green-100' : 'bg-white'
            }`}
          >
            <div className='flex justify-between items-center'>
              <span className='font-semibold'>{topic.title}</span>
              <span
                className={`px-3 py-1 rounded ${
                  topic.completed
                    ? 'bg-green-500 text-white'
                    : 'bg-yellow-500 text-white'
                }`}
              >
                {topic.completed ? 'Completed' : 'In Progress'}
              </span>
            </div>
            <div className='mt-2'>
              <p className='text-sm'>Understanding: {topic.understanding}%</p>
              <div className='w-full bg-gray-300 rounded-full h-2'>
                <div
                  className='bg-blue-500 h-2 rounded-full'
                  style={{ width: `${topic.understanding}%` }}
                ></div>
              </div>
            </div>
          </li>
        ))}
      </ul> */}

      {/* Resources */}
      {/* <h2 className='text-lg font-semibold mb-2'>Associated Resources</h2>
      <ul className='mb-6 space-y-2'>
        {project.resources.map((resource) => (
          <li
            key={resource.id}
            className='flex justify-between items-center bg-white p-4 border rounded-lg'
          >
            <a
              href={resource.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              {resource.title}
            </a>
            <input
              type='checkbox'
              checked={resource.done}
              className='w-5 h-5'
              readOnly
            />
          </li>
        ))}
      </ul> */}

      {/* Evolution Timeline */}
      {/* <h2 className='text-lg font-semibold mb-2'>Evolution Timeline</h2>
      <ul className='space-y-2'>
        {project.timeline.map((event, index) => (
          <li key={index} className='p-2 bg-gray-200 rounded-lg'>
            <span className='font-semibold'>{event.date}:</span> {event.event}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProjectView;
