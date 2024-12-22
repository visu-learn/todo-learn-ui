'use client';
import { Accordion, AccordionItem, Chip, Progress } from '@nextui-org/react';
import { useState } from 'react';

const ProjectMilestones = () => {
  const [milestones] = useState([
    {
      id: 1,
      title: 'Set Up Development Environment',
      description: 'Install necessary tools and IDEs',
      dueDate: '2024-12-30',
      status: 'Completed',
      tasks: ['Install VS Code', 'Install Node.js'],
    },
    {
      id: 2,
      title: 'Learn React Basics',
      description: 'Understand components, state, and props',
      dueDate: '2025-01-05',
      status: 'In Progress',
      tasks: ['Read React docs', 'Create a small app'],
    },
    {
      id: 3,
      title: 'Backend Fundamentals',
      description: 'Learn Spring Boot and RESTful APIs',
      dueDate: '2025-01-15',
      status: 'Not Started',
      tasks: ['Watch Spring Boot tutorial', 'Build API'],
    },
    {
      id: 4,
      title: 'Build a Full-Stack App',
      description: 'Combine React frontend with Spring Boot backend',
      dueDate: '2025-01-30',
      status: 'Not Started',
      tasks: ['Set up API endpoints', 'Build UI'],
    },
  ]);

  return (
    <div className='p-6 bg-gray-50 rounded-lg shadow-sm'>
      <Accordion defaultExpandedKeys={['pmilstone']}>
        <AccordionItem
          key={'pmilstone'}
          title={
            <>
              <h2 className='text-xl text-gray-500 font-bold mb-4'>
                Project Milestones
              </h2>
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
            </>
          }
        >
          <ul className='space-y-6'>
            {milestones.map((milestone) => (
              <li
                key={milestone.id}
                className={`p-4 border rounded-lg ${
                  milestone.status === 'Completed' ? 'bg-green-100' : 'bg-white'
                }`}
              >
                <h3 className='text-lg font-semibold'>{milestone.title}</h3>
                <p className='text-gray-700'>{milestone.description}</p>
                <p className='text-sm text-gray-500'>
                  Due Date: {milestone.dueDate}
                </p>
                <Chip
                  className={`mt-2 px-3 py-1 inline-block rounded ${
                    milestone.status === 'Completed'
                      ? 'bg-green-500 text-white'
                      : milestone.status === 'In Progress'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-500 text-white'
                  }`}
                >
                  {milestone.status}
                </Chip>
              </li>
            ))}
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProjectMilestones;
