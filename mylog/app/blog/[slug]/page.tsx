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
      <div className="flex flex-wrap">
        <div className="sm:w-1/2">
          <BookCard bookName={series} />
        </div>
        {seriesArticle.map(el => (
          <Card post={el} />
        ))}
      </div>
    </>
  );
};

export default Page;
