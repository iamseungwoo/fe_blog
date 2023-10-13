import Card from '@/app/component/ArticleCard/Card';
import BookCard from '@/app/component/BookCard';
import { getAllPosts } from '@/app/lib/post';
import { notFound } from 'next/navigation';

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = `/posts/${[decodeURI(params.slug)].join('/')}`;
  const series = decodeURI(params.slug);
  const seriesArticle: any[] = getAllPosts().filter(
    ps => ps.slug.split('/')[2] == series,
  );

  console.log(seriesArticle);
  if (!seriesArticle.length) {
    console.log(123);
    return notFound();
  }
  return (
    <>
      <div className="grid gap-8 sm:grid-cols-3 sm:gap-32">
        <div className="sm:sticky sm:top-8 sm:self-start">
          <BookCard bookName={series} />
        </div>
        <div className="sm:col-span-2">
          {seriesArticle.map(el => (
            <Card post={el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
