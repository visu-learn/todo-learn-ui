import { CheckBox, CalendarMonthOutlined, Category } from '@mui/icons-material';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';

interface Props {
  className?: string;
  isSelected?: boolean;
}

const TaskCard: React.FC<Props> = ({ className, isSelected }) => {
  return (
    <Card
      className={`${className} ${
        isSelected ? 'border-2 border-double border-blue-300' : ''
      } w-[300px]`}
      isPressable
    >
      <CardHeader className='flex gap-3'>
        <CheckBox />
        <div className='flex flex-col'>
          <p className='text-md'>Topic One</p>
          <p className='text-small text-default-500'>nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className=''>
          <span>Research content Ideas</span>
          <div className='flex gap-8 justify-between'>
            <div className='text-sm flex items-end'>
              <CalendarMonthOutlined />
              <span>22-03-22</span>
            </div>

            <div className='flex text-sm items-end'>
              <span className='px-2 bg-gray-300 rounded-lg'>.</span>
              <span>Tag</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TaskCard;
