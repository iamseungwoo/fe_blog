import Card from '@/app/component/ArticleCard/Card';
import BookCard from '@/app/component/BookCard';
import { getAllPosts, getPostWithSeries } from '@/app/lib/post';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const Page = async ({ params }: { params: { slug: string } }) => {
  const series = params.slug;
  console.log(series);

  const seriesPosts = getPostWithSeries(series);

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-3 sm:gap-32">
        <div className="sm:sticky sm:top-8 sm:self-start">
          <BookCard bookName={series} />
        </div>
        <div className="sm:col-span-2">
          {seriesPosts.map((el, i) => (
            <Link href={el.slug.replace('/posts', `/blog/${el.series}`)} key={i}>
              <Card post={el} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
