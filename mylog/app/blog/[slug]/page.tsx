import { getAllPosts } from '@/app/lib/post';
import { notFound } from 'next/navigation';

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = `/posts/${[decodeURI(params.slug)].join('/')}`;
  const series = decodeURI(params.slug);
  const seriesArticle: any[] = getAllPosts()
    .map(post => post.slug)
    .filter(ps => ps.split('/')[2] == series);

  console.log(seriesArticle);
  if (!seriesArticle.length) {
    console.log(123);
    return notFound();
  }
  return (
    <>
      {seriesArticle.map(el => (
        <div>{el}</div>
      ))}
    </>
  );
};

export default Page;
