import {
  createSubjectCategory,
  fecthSubjectCategories,
  generateEmptySubjectCategory,
} from '@/dataProviders/subjectCategory/data';
import { SubjectCategory } from '@/Interfaces/subjects';
import { useCallback, useEffect, useState } from 'react';

export const useCreateSubjectCategory = (): {
  category: SubjectCategory;
  onSubjectCategoryChange: (
    field: keyof SubjectCategory,
    value: string | number
  ) => void;
  onCreateSubjectCategory: (
    onSuccess?: (s: SubjectCategory) => void,
    onError?: (e: any) => void
  ) => void;
  isCreating: boolean;
} => {
  const [category, setCategory] = useState<SubjectCategory>(
    generateEmptySubjectCategory()
  );

  const [isCreating, setIsCreating] = useState(false);

  const onSubjectCategoryChange = useCallback(
    (field: keyof SubjectCategory, value: any) => {
      setCategory((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const onCreateSubjectCategory = (
    onSuccess?: (s: SubjectCategory) => void,
    onError?: (e: any) => void
  ) => {
    try {
      setIsCreating(true);
      createSubjectCategory(category).then((res) => {
        if (res) {
          onSuccess?.(res);
        } else {
          onError?.('An Error occured');
        }
        setIsCreating(false);
      });
    } catch (error) {
      onError?.(error);
    }
  };

  return {
    category,
    onSubjectCategoryChange,
    onCreateSubjectCategory,
    isCreating,
  };
};

export const useSubjectCategories = (): {
  subjectCategories: SubjectCategory[];
  isFetching: boolean;
} => {
  const [categories, setCategories] = useState<SubjectCategory[]>([]);
  const [isFetching, setIsFecthing] = useState(false);

  const getCategories = useCallback(() => {
    setIsFecthing(true);
    fecthSubjectCategories()
      .then((data) => {
        setCategories(data ?? []);
      })
      .catch((err) => {
        console.error('[err]', err);
        setIsFecthing(false);
      })
      .finally(() => {
        setIsFecthing(false);
      });
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return { subjectCategories: categories, isFetching };
};
