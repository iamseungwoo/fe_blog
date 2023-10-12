import { getAllSeries } from '../lib/post';
import BookCard from './BookCard';
import Link from 'next/link';
const Series = () => {
  const series = getAllSeries();

  return (
    <div className="my-12 -ml-8 flex items-center space-x-6 overflow-scroll py-12 pl-8 no-scrollbar">
      {series.map((el, i) => (
        <Link href={`blog/${el}`}>
          <BookCard bookName={el} key={i} />
        </Link>
      ))}
    </div>
  );
};

export default Series;
