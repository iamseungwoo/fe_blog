import Calendar from "../Icon/Calendar";
import Clock from "../Icon/Clock";

const PostInfo = ({ date, readingTime }) => {
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
