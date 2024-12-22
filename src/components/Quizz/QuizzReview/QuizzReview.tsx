import { useState } from 'react';

interface Props {
  className?: string;
}
const QuizzReview: React.FC<Props> = () => {
  const [review] = useState({
    totalScore: 80,
    correctAnswers: 8,
    totalQuestions: 10,
    strengths: ['React Basics', 'State Management'],
    weakAreas: ['Redux Middleware', 'REST API Design'],
    aiSuggestions: [
      'Review Redux documentation and implement a sample middleware project.',
      'Revisit REST API best practices and testing techniques.',
    ],
    questions: [
      {
        id: 1,
        question: 'What is a React component?',
        userAnswer: 'A UI element',
        correctAnswer: 'A reusable UI element',
        explanation: 'React components are the building blocks of UIs.',
        isCorrect: false,
      },
      {
        id: 2,
        question: 'What is middleware?',
        userAnswer: 'An API connector',
        correctAnswer: 'Function in request pipeline',
        explanation: 'Middleware is used to enhance request/response handling.',
        isCorrect: false,
      },
      {
        id: 3,
        question: 'What is JSX?',
        userAnswer: 'JavaScript XML',
        correctAnswer: 'JavaScript XML',
        explanation: 'JSX is a syntax extension for JavaScript used in React.',
        isCorrect: true,
      },
    ],
  });

  return (
    <div className='p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-xl font-bold mb-4'>AI Quiz Review</h2>

      {/* Score Overview */}
      <div className='mb-6'>
        <h3 className='text-lg font-semibold'>Score</h3>
        <p className='text-gray-700'>
          You scored {review.totalScore}% ({review.correctAnswers}/
          {review.totalQuestions} correct answers).
        </p>
      </div>

      {/* Strengths */}
      <div className='mb-6'>
        <h3 className='text-lg font-semibold'>Key Strengths</h3>
        <ul className='list-disc pl-5 space-y-2'>
          {review.strengths.map((strength, index) => (
            <li key={index} className='text-green-600'>
              {strength}
            </li>
          ))}
        </ul>
      </div>

      {/* Weak Areas */}
      <div className='mb-6'>
        <h3 className='text-lg font-semibold'>Weak Areas</h3>
        <ul className='list-disc pl-5 space-y-2'>
          {review.weakAreas.map((area, index) => (
            <li key={index} className='text-red-600'>
              {area}
            </li>
          ))}
        </ul>
      </div>

      {/* AI Suggestions */}
      <div className='mb-6'>
        <h3 className='text-lg font-semibold'>AI Suggestions</h3>
        <ul className='list-disc pl-5 space-y-2'>
          {review.aiSuggestions.map((suggestion, index) => (
            <li key={index} className='text-blue-600'>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>

      {/* Question-by-Question Review */}
      <div>
        <h3 className='text-lg font-semibold mb-2'>Detailed Question Review</h3>
        <ul className='space-y-4'>
          {review.questions.map((q) => (
            <li
              key={q.id}
              className={`p-4 border rounded-lg ${
                q.isCorrect ? 'bg-green-100' : 'bg-red-100'
              }`}
            >
              <h4 className='font-semibold'>{q.question}</h4>
              <p className='text-sm'>
                <span className='font-bold'>Your Answer:</span> {q.userAnswer}
              </p>
              <p className='text-sm'>
                <span className='font-bold'>Correct Answer:</span>{' '}
                {q.correctAnswer}
              </p>
              <p className='text-sm text-gray-700 mt-2'>
                <span className='font-bold'>Explanation:</span> {q.explanation}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizzReview;
