import Card from '@/app/component/Series/Card';
import BookCard from '@/app/component/BookCard';
import { getPostWithSeries } from '@/app/lib/post';
import Link from 'next/link';

const Page = async ({ params }: { params: { slug: string } }) => {
  const series = params.slug;
  console.log(series);

  const seriesPosts = getPostWithSeries(series).sort((a, b) =>
    a.date.localeCompare(b.date),
  );

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-3 sm:gap-32">
        <div className="sm:sticky sm:top-8 sm:self-start">
          <BookCard bookName={series} />
        </div>
        <div className="sm:col-span-2">
          {seriesPosts.map((el, i) => (
            <Link
              href={el.slug.replace('/posts', `/blog/${el.series}`)}
              key={i}
            >
              <Card post={el} idx={i} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
