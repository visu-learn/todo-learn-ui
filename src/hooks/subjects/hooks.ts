import {
  createSubject,
  generateEmptySubject,
} from '@/dataProviders/subjects/data';
import { Subject } from '@/Interfaces/subjects';
import { useCallback, useState } from 'react';

export const useCreateSubject = (): {
  subject: Subject;
  onSubjectChange: (
    field: keyof Omit<Subject, 'id' | 'topics' | 'projects' | 'quizzes'>,
    value: any
  ) => void;
  onCreateSubject: (
    onSuccess?: (s: Subject) => void,
    onError?: (e: any) => void
  ) => void;
  isCreating: boolean;
} => {
  const [subject, setSubject] = useState(generateEmptySubject());
  const [isCreating, setIsCreating] = useState(false);

  const onSubjectChange = useCallback(
    (
      field: keyof Omit<Subject, 'id' | 'topics' | 'projects' | 'quizzes'>,
      value: any
    ) => {
      setSubject((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleCreateSubject = (
    onSuccess?: (s: Subject) => void,
    onError?: (e: any) => void
  ) => {
    try {
      setIsCreating(true);
      createSubject(subject).then((res) => {
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
    subject,
    onSubjectChange,
    onCreateSubject: handleCreateSubject,
    isCreating,
  };
};

export const useSubject = ({ subjectId: number }) => {
  // get subject by Id
  // update Subject
};
