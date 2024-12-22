import {
  DatePicker,
  Input,
  Progress,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import QuizzCard from '../QuizzCard';
import QuizzReview from '../QuizzReview/QuizzReview';

const QuizzView = () => {
  return (
    <div className='flex'>
      <div className='w-[400px]'>
        <QuizzCard className='my-2' isSelected />
        <QuizzCard className='my-2' />
        <QuizzCard className='my-2' />
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
          label='Overall Score'
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
        <QuizzReview />
      </div>
    </div>
  );
};

export default QuizzView;
