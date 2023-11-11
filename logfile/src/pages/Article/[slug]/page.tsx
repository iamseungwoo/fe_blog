import PostTitle from '@/app/component/PostPage/PostTitle';
import Giscus from '@/app/component/global/Giscus';
import { getAllPosts } from '@/app/lib/post';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

const Page = async ({ params }: { params: { slug: any } }) => {
  const slug = `/article/${[decodeURI(params.slug)].join('/')}`;
  const post = getAllPosts().find(post => post.slug === slug);

  console.log();
  if (!post) {
    return notFound();
  }

  const { content, frontmatter } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkToc, remarkGfm],
        rehypePlugins: [
          [
            rehypeSlug,
            rehypeCodeTitles,
            rehypePrism,
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ['anchor'],
                },
              },
            ],
          ],
        ],
      },
    },
  });
  return (
    <>
      <PostTitle post={post} />
      <article className="prose dark:prose-dark max-w-none my-12 prose-neutral font-spoqa dark:prose-dark">
        {content}
      </article>
      <Giscus />
    </>
  );
};

export default Page;
