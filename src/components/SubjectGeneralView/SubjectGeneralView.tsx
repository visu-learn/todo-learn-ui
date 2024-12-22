import {
  Select,
  SelectItem,
  Textarea,
  DatePicker,
  Input,
} from '@nextui-org/react';

interface Props {
  className?: string;
}

const SubjectGeneralView: React.FC<Props> = ({ className }) => {
  return (
    <div className='flex'>
      <div className='w-full'>
        <div className='p-8 bg-gray-50 min-h-[80vh] w-full'>
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
                Main learning resources
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectGeneralView;
