import {
  Chip,
  Button,
  Progress,
  Select,
  SelectItem,
  Textarea,
  DatePicker,
  Input,
} from '@nextui-org/react';
import TaskCard from '../TaskCard/TaskCard';

interface Props {
  className?: string;
}

const TaskView: React.FC<Props> = ({ className }) => {
  return (
    <div className='flex'>
      <div className='w-[400px]'>
        <TaskCard className='my-2' isSelected />
        <TaskCard className='my-2' />
        <TaskCard className='my-2' />
        <TaskCard className='my-2' />
        <TaskCard className='my-2' />
      </div>
      <div className='w-full'>
        <div className='p-8 bg-gray-50 min-h-[80vh] w-full'>
          <div className='flex justify-between'>
            <h2 className='text-2xl text-gray-400 font-bold mb-4'>
              Topic One (Supposed to be the title){' '}
              <Chip color='warning'>en cours</Chip>
            </h2>
            <h2 className='text-lg text-gray-400 font-bold mb-4'>
              Priority: <Chip color='danger'>high</Chip>
            </h2>
            <div className='flex gap-3'>
              <Button size='sm' color='success' className=''>
                Request Review
              </Button>
              <Button size='sm' color='danger' className=''>
                Close
              </Button>
            </div>
          </div>
          <Progress
            classNames={{
              base: 'max-w-full',
              track: 'drop-shadow-md border border-default',
              indicator: 'bg-gradient-to-r from-red-500 to-green-500',
              label: 'tracking-wider font-medium text-default-600',
              value: 'text-foreground/60',
            }}
            className='my-3'
            label='Score (Resume AI)'
            radius='sm'
            showValueLabel={true}
            size='sm'
            value={90}
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

          <div className='my-5'>
            <div className='p-6 bg-gray-100 rounded-lg'>
              <h3 className='font-bold text-lg text-gray-500'>
                Learning Resources
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskView;
