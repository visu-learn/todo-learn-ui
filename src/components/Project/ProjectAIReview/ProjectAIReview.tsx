import { Accordion, AccordionItem, Button, Progress } from '@nextui-org/react';
import { useState } from 'react';

const ProjectAIReview = () => {
  const [review] = useState({
    overallProgress: 75,
    strengths: [
      'Strong understanding of React Basics and State Management.',
      'Consistent progress on frontend development.',
    ],
    areasForImprovement: [
      'Backend Development knowledge is at 60%.',
      'Limited understanding of deployment strategies.',
    ],
    nextSteps: [
      'Revisit the Spring Boot tutorial and implement a CRUD API project.',
      'Learn about containerization using Docker for deployment.',
    ],
    detailedFeedback: [
      {
        topic: 'React Basics',
        feedback:
          'Excellent understanding. You can proceed to advanced topics.',
        score: 90,
      },
      {
        topic: 'State Management',
        feedback:
          'Good progress. Focus on Redux middleware for complex state handling.',
        score: 80,
      },
      {
        topic: 'Backend Development',
        feedback: 'Needs improvement. Work on REST API design and testing.',
        score: 60,
      },
    ],
  });

  return (
    <div className='p-6 bg-gray-50 rounded-lg shadow-sm'>
      <Accordion>
        <AccordionItem
          key='1'
          title={
            <>
              <div className='flex justify-between'>
                <h2 className='text-xl text-gray-500 font-bold mb-4'>
                  Review and Feedback
                </h2>
                <div>
                  <Button size='sm' color='warning' className='mx-2'>
                    Mark Done
                  </Button>
                  <Button size='sm' color='primary'>
                    Ask Review
                  </Button>
                </div>
              </div>

              {/* Overall Progress */}
              <div className='mb-6'>
                <Progress
                  classNames={{
                    base: 'max-w-full',
                    track: 'drop-shadow-md border border-default',
                    indicator: 'bg-gradient-to-r from-red-600 to-green-600',
                    label: 'tracking-wider font-medium text-default-600',
                    value: 'text-foreground/60',
                  }}
                  className='my-3'
                  label='Overall Score'
                  radius='sm'
                  showValueLabel={true}
                  size='sm'
                  value={95}
                />
              </div>
            </>
          }
        >
          {/* Strengths */}
          <div className='mb-6'>
            <h3 className='text-lg font-semibold'>Strengths</h3>
            <ul className='list-disc pl-5 space-y-2'>
              {review.strengths.map((strength, index) => (
                <li key={index} className='text-green-600'>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* Areas for Improvement */}
          <div className='mb-6'>
            <h3 className='text-lg font-semibold'>Areas for Improvement</h3>
            <ul className='list-disc pl-5 space-y-2'>
              {review.areasForImprovement.map((area, index) => (
                <li key={index} className='text-red-600'>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Next Steps */}
          <div className='mb-6'>
            <h3 className='text-lg font-semibold'>Next Steps</h3>
            <ul className='list-disc pl-5 space-y-2'>
              {review.nextSteps.map((step, index) => (
                <li key={index} className='text-blue-600'>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Feedback */}
          <div>
            <h3 className='text-lg font-semibold mb-2'>Detailed Feedback</h3>
            <ul className='space-y-4'>
              {review.detailedFeedback.map((feedback, index) => (
                <li key={index} className='p-4 bg-white border rounded-lg'>
                  <h4 className='font-semibold'>{feedback.topic}</h4>
                  <p className='text-sm text-gray-700'>{feedback.feedback}</p>
                  <p className='text-sm mt-1'>
                    Score:{' '}
                    <span
                      className={`font-bold ${
                        feedback.score >= 75 ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {feedback.score}%
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProjectAIReview;
