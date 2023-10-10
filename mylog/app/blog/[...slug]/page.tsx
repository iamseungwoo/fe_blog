import { getAllPosts } from "@/app/lib/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { rehype } from 'rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/*
export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();
    
    return {
        paths: posts.map((post) => post.slug),
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slugs } = params as { slugs: string[] };

    
    
    

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            slug,
        },
    };
};
*/

export default async function Page({ params }: { params: { slug: string } }) {

    const slug = `/posts/${[params.slug].join('/')}`;
    const post = getAllPosts().find((post) => post.slug === slug);

    if (!post) {
        return notFound();
    }
    
    return (
        <div className="prose dark:prose-dark mt-4 w-full max-w-none">
            <MDXRemote source={post.content} />
        </div>
    )
}