'use client';

import ProjectView from '@/components/Project/ProjectView/ProjectView';
import QuizzView from '@/components/Quizz/QuizzView/QuizzView';
import StatsView from '@/components/Stats/StatsView/StatsView';
import SubjectGeneralView from '@/components/SubjectGeneralView/SubjectGeneralView';
import TaskView from '@/components/TaskTopic/TaskView';
import { Card, CardBody, Chip, Tab, Tabs } from '@nextui-org/react';

export default function Home() {
  return (
    <div className='rounded  p-8'>
      <h1 className='text-5xl font-bold mb-4'>
        Subject-One <Chip>status</Chip>
      </h1>
      <Tabs aria-label='Options'>
        <Tab key='general' title='General Info'>
          <SubjectGeneralView />
        </Tab>
        <Tab key='topics' title='Topics|Tasks'>
          <TaskView />
        </Tab>
        <Tab key='project' title='Projects'>
          <ProjectView />
        </Tab>
        <Tab key='quizz' title='Quizz'>
          <QuizzView />
        </Tab>
        <Tab key='stats' title='stats'>
          <StatsView />
        </Tab>
      </Tabs>
      <div className='flex col w-full'></div>
    </div>
  );
}
