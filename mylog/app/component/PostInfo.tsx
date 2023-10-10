import Calendar from './icon/Calendar';
import Clock from './icon/Clock';

const PostInfo = ({
  date,
  readingTime,
}: {
  date: string;
  readingTime: number;
}) => {
  return (
    <div className="ml-auto flex gap-2 whitespace-nowrap group-hover:drop-shadow-base-bold">
      <div className="flex items-center gap-1 text-xs">
        <Calendar />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-1 text-xs">
        <Clock />
        <span>{readingTime}분</span>
      </div>
    </div>
  );
};

export default PostInfo;
