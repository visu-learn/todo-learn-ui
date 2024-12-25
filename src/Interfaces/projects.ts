export interface Project {
  id: number;
  subjectId: number;
  title: string;
  description: string;
  deadline: Date;
  level: ProjectLevel;
  type: ProjectType;
  status: ProjectStatus;
  milestones: ProjectMileStone[];
}

export enum ProjectLevel {
  BEGINNER,
  INTERMEDIATE,
  ADVANCED,
}

export enum ProjectType {
  PROGRAMMING,
  BLOG_WRITING,
}

export enum ProjectStatus {
  DRAFT_AI,
  TODO,
  IN_PROGRESS,
  DONE,
}

export interface ProjectMileStone {
  id: number;
  projectId: number;
  title: string;
  isDone: boolean;
}
