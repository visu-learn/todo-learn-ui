import { Project } from './projects';
import { Quiz } from './quizzes';
import { Topic } from './topics';

export interface Subject {
  id: number;
  name: string;
  description: string;
  status: SubjectStatus;
  deadline?: Date;
  estimatedHours?: number;

  topics?: Topic[];
  projects?: Project[];
  quizzes?: Quiz[];
}

export interface SubjectCategory {
  id: number;
  name: string;
}

export enum SubjectStatus {
  TODO,
  IN_PROGRESS,
  DONE,
  ARCHIVED,
}

export interface SubjectResource {
  id: number;
  name: string;
  description: string;
}
