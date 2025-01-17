import { API_BASE_URL } from '@/const';
import { SubjectCategory } from '@/Interfaces/subjects';
import axios from 'axios';

const API_CATEGORIES_BASE_URL = API_BASE_URL + '/subject-categories';

export const fecthSubjectCategories = async (): Promise<SubjectCategory[] | null> => {
  const cats = await axios.get<SubjectCategory[]>(API_CATEGORIES_BASE_URL);
  return cats.data;
};

export const createSubjectCategory = async (
  category: SubjectCategory
): Promise<SubjectCategory | null> => {
  const created = await axios.post<SubjectCategory | null>(
    API_CATEGORIES_BASE_URL,
    category
  );
  return created.data;
};

export const fecthSubjectCategoryById = async (
  id: number
): Promise<SubjectCategory | null> => {
  const category = await axios.get<SubjectCategory | null>(
    `${API_CATEGORIES_BASE_URL}/${id}`
  );
  return category.data;
};

export const generateEmptySubjectCategory = (): SubjectCategory => {
  return {
    id: -1,
    name: '',
    description: '',
  };
};
