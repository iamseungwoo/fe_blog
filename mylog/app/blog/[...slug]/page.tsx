import PostTitle from '@/app/component/PostPage/PostTitle';
import { getAllPosts } from '@/app/lib/post';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: any } }) {
  const slug = `/posts/${[params.slug.join('/')].join('/')}`;
  const post = getAllPosts().find(post => post.slug === slug);

  console.log(params.slug);
  if (!post) {
    return notFound();
  }

  const markdown = post.content;
  console.log(markdown);
  return (
    <article className="prose lg:prose-xl">
      <PostTitle post={post} />
      <MDXRemote
        source={markdown}
      />
    </article>
  );
}
