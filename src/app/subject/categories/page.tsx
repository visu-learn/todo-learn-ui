'use client';
import {
  useCreateSubjectCategory,
  useSubjectCategories,
} from '@/hooks/subjectcategories/hooks';
import { SubjectCategory } from '@/Interfaces/subjects';
import { Button, Input, Textarea } from '@nextui-org/react';
import { useCallback } from 'react';

const SubjectCategories: React.FC = () => {
  const {
    category,
    isCreating,
    onCreateSubjectCategory,
    onSubjectCategoryChange,
  } = useCreateSubjectCategory();

  const { subjectCategories: categories, isFetching } = useSubjectCategories();

  const handleFieldChange = useCallback(
    (field: keyof SubjectCategory) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (e: any) => {
        const value = e?.target?.value ?? null;
        onSubjectCategoryChange(field, value);
      },
    [onSubjectCategoryChange]
  );

  const onCreate = useCallback(() => {
    // check if all data are valid
    onCreateSubjectCategory();
  }, [onCreateSubjectCategory]);

  return (
    <>
      <div className='flex'>
        <div className='w-full'>
          <div className='p-8 shadow-lg bg-gray-200 rounded-lg min-h-[80vh] w-[50%] min-w-[800px]'>
            <div>
              <h3 className='font-bold text-lg text-gray-500'>
                Add new Category
              </h3>
              <div className='flex flex-col items-center'>
                <div className='flex col my-2 gap-2 w-full'>
                  <Input
                    label='Subject Name'
                    value={category.name}
                    onChange={handleFieldChange('name')}
                    placeholder='enter subject name...'
                  />
                </div>

                <div className='my-2 w-full'>
                  <Textarea
                    label='Description'
                    value={category.description}
                    onChange={handleFieldChange('description')}
                    placeholder='enter text here'
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
              </div>
            </div>
          </div>

          <div className='min-h-screen bg-gray-100 p-8'>
            <h1 className='text-3xl font-bold mb-6 text-center'>Categories</h1>
            {isFetching ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {categories?.map((category) => (
                  <div
                    key={category.id}
                    className='p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200'
                  >
                    <h2 className='text-xl font-semibold mb-2'>
                      {category.name}
                    </h2>
                    <p className='text-gray-600'>{category.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectCategories;
