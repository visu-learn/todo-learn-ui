import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  Progress,
} from '@nextui-org/react';

interface Props {
  className?: string;
  isSelected?: boolean;
  label: string;
  total: number;
  completed: number;
}

const StatProgressCard: React.FC<Props> = ({
  className,
  isSelected,
  label,
  total,
  completed,
}) => {
  return (
    <>
      <Card
        className={`${className} ${
          isSelected ? 'border-2 border-double border-blue-300' : ''
        }`}
      >
        <CardHeader className='flex gap-3'>
          <div className='flex flex-col'>
            <p className='text-lg text-gray-500'>{label}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className=''>
            <span>Total: </span>
            <span>{total}</span>
          </div>
          <div className=''>
            <span>Completed : </span>
            <span>{completed}</span>
          </div>
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
              value={(completed / total) * 100}
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default StatProgressCard;
