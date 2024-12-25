export interface Topic {
  id: number;
  subjectId: number;
  title: string;
  description: string;
  resources: TopicResource[];
  type: TopicType;
  status: TopicStatus;
  priority: TopicPriority;
}

export enum TopicType {
  THEORY,
  CODING,
  SETUP,
}

export enum TopicStatus {
  AI_DRAFT,
  TODO,
  IN_PROGRESS,
  DONE,
  ARCHIVED,
}

export enum TopicPriority {
  LOW,
  MEDIUM,
  HIGH,
}

export interface TopicResource {
  id: number;
}
