import PostTitle from '@/app/component/PostPage/PostTitle';
import Giscus from '@/app/component/global/Giscus';
import { getAllPosts } from '@/app/lib/post';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

const Page = ({ params }: { params: { slug: any } }) => {
  const slug = `/article/${[decodeURI(params.slug)].join('/')}`;
  const post = getAllPosts().find(post => post.slug === slug);

  console.log();
  if (!post) {
    return notFound();
  }

  const markdown = post.content;
  console.log(markdown);
  return (
    <>
      <article className="text-primary font-semibold">
        <PostTitle post={post} />
        <MDXRemote source={markdown} />
      </article>
      <Giscus />
    </>
  );
};

export default Page;
