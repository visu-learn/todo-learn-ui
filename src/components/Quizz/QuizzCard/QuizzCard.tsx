import { CalendarMonthOutlined } from '@mui/icons-material';
import {
  Card,
  CardHeader,
  Checkbox,
  Divider,
  CardBody,
} from '@nextui-org/react';

interface Props {
  className?: string;
  isSelected?: boolean;
}

const QuizzCard: React.FC<Props> = ({ className, isSelected }) => {
  return (
    <>
      <Card
        className={`${className} ${
          isSelected ? 'border-2 border-double border-blue-300' : ''
        } w-[300px]`}
        isPressable
      >
        <CardHeader className='flex gap-3'>
          <Checkbox checked />
          <div className='flex flex-col'>
            <p className='text-md'>Project_ID</p>
            <p className='text-small text-default-500'>nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className=''>
            <span>Message App</span>
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
    </>
  );
};

export default QuizzCard;
