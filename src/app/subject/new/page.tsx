'use client';
import {
  Select,
  SelectItem,
  Textarea,
  DatePicker,
  Input,
  Button,
  Spinner,
} from '@nextui-org/react';

export default function newsubject() {
  return (
    <>
      <div className='flex'>
        <div className='w-full'>
          <div className='p-8 shadow-lg bg-gray-200 rounded-lg min-h-[80vh] w-[50%] min-w-[800px]'>
            <div>
              <h3 className='font-bold text-lg text-gray-500'>General Info</h3>
              <div className='flex flex-col items-center'>
                <div className='flex col my-2 gap-2 w-full'>
                  <Input
                    label='Subject Name'
                    placeholder='enter subject name...'
                  />

                  <Select label='Category' placeholder='select category'>
                    <SelectItem key={2}>Tag 1</SelectItem>
                    <SelectItem key={1}>Tag 2</SelectItem>
                    <SelectItem key={3}>Tag 3</SelectItem>
                  </Select>
                </div>
                <div className='my-2 w-full'>
                  <Textarea
                    label='Description'
                    value={'ceci est un text non editable'}
                    placeholder='enter text here'
                  />
                </div>

                <div className='flex col my-2 gap-2 w-full'>
                  <DatePicker label='Start Date' />
                  <DatePicker label='Deadline (Optional)' />
                </div>
                <Button className='my-3 text-bold w-[60%]' color='success'>
                  Get A Draft TodoLearn
                </Button>
                <Spinner />
                <p>sending data to model ...</p>
                <p>Getting suggestions for Topics...</p>
                <p>Redirecting to Subject UI, Please wait ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
