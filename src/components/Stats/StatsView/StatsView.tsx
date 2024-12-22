import StatProgressCard from '../StatProgressCard/StatProgressCard';

const StatsView: React.FC = () => {
  return (
    <>
      <div className='mb-3'>
        <StatProgressCard
          label='Overall Progress (topics + projects + quizzes)'
          total={80}
          completed={1}
        />
      </div>
      <div className='flex gap-2'>
        <StatProgressCard
          className='w-[400px]'
          label='Topics | Tasks Progress'
          total={80}
          completed={1}
        />
        <StatProgressCard
          className='w-[400px]'
          label='Quizzes'
          total={42}
          completed={10}
        />
        <StatProgressCard
          className='w-[400px]'
          label='Projects'
          total={5}
          completed={2}
        />
      </div>
    </>
  );
};

export default StatsView;
