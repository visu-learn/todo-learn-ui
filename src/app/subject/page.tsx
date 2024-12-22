'use client';

import ProjectView from '@/components/Project/ProjectView/ProjectView';
import TaskView from '@/components/TaskTopic/TaskView';
import { Card, CardBody, Chip, Tab, Tabs } from '@nextui-org/react';

export default function Home() {
  return (
    <div className='rounded  p-8'>
      <h1 className='text-5xl font-bold mb-4'>
        Subject-One <Chip>status</Chip>
      </h1>
      <Tabs aria-label='Options'>
        <Tab key='topics' title='Topics'>
          <TaskView />
        </Tab>
        <Tab key='project' title='Projects'>
          <ProjectView />
        </Tab>
        <Tab key='quizz' title='Quizz'>
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
        <Tab key='stats' title='stats'>
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
      <div className='flex col w-full'></div>
    </div>
  );
}
