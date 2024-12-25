export interface Quiz {
  id: number;
  subjectId: number;
  title: string;
  description: string;
  topics: string;
  hasTimer: boolean;
  duration_in_second: boolean;
}

export interface QuizQuestion {
  id: number;
  quizId: number;
  content: string;
  type: QuizQuestionType;
  level: QuizQuestionLevel;
  hasTimer: boolean;
  duration_in_second: number;
  options: QuizQuestionOption[];
  userAnswer: string;
  score: string;
}

export enum QuizQuestionLevel {
  BEGINNER,
  INTERMEDIATE,
  ADVANCED,
  EXPERT,
}

export enum QuizQuestionType {
  RADIO,
  SHORT_ANSWER,
  TRUE_FALSE,
  CHECKBOX,
}

export interface QuizQuestionOption {
  id: number;
  questionId: number;
  content: string;
  correct: boolean;
}
