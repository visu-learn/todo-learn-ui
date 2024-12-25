import { API_BASE_URL } from '@/const';
import { Subject } from '@/Interfaces/subjects';
import axios from 'axios';

const API_SUBJECT_BASE_URL = API_BASE_URL + '/subjects';

export const fecthSubjects = async (): Promise<Subject[] | null> => {
  const subjects = await axios.get<Subject[]>(API_SUBJECT_BASE_URL);
  return subjects.data;
};

export const createSubject = async (
  subject: Subject
): Promise<Subject | null> => {
  const created = await axios.post<Subject | null>(
    API_SUBJECT_BASE_URL,
    subject
  );
  return created.data;
};

export const fecthSubjectById = async (id: number): Promise<Subject | null> => {
  const subject = await axios.get<Subject | null>(
    `${API_SUBJECT_BASE_URL}/${id}`
  );
  return subject.data;
};
