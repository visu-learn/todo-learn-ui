'use client';
import { useCreateSubject } from '@/hooks/subjects/hooks';
import { Subject } from '@/Interfaces/subjects';
import {
  Select,
  SelectItem,
  Textarea,
  DatePicker,
  Input,
  Button,
  Spinner,
} from '@nextui-org/react';
import { useCallback } from 'react';

const NewSubject: React.FC = () => {
  const { subject, isCreating, onCreateSubject, onSubjectChange } =
    useCreateSubject();

  const handleFieldChange = useCallback(
    (field: keyof Omit<Subject, 'id' | 'topics' | 'projects' | 'quizzes'>) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (e: any) => {
        const value = e?.target?.value ?? null;
        onSubjectChange(field, value);
      },
    [onSubjectChange]
  );

  const onCreate = useCallback(() => {
    // check if all data are valid
    onCreateSubject();
  }, [onCreateSubject]);

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
                    value={subject.name}
                    onChange={handleFieldChange('name')}
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
                    value={subject.description}
                    onChange={handleFieldChange('description')}
                    placeholder='enter text here'
                  />
                </div>

                <div className='flex col my-2 gap-2 w-full'>
                  <DatePicker label='Start Date' />
                  <DatePicker
                    label='Deadline (Optional)'
                    onChange={handleFieldChange('deadline')}
                  />
                </div>
                <Button
                  isLoading={isCreating}
                  className='my-3 text-bold w-[60%]'
                  color='success'
                  onPress={onCreate}
                >
                  Get A Draft TodoLearn
                </Button>
                {isCreating && <Spinner />}
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
};

export default NewSubject;
