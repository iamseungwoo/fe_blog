import { getAllPosts } from "@/app/lib/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {

    const slug = `/posts/${[params.slug].join('/')}`;
    const post = getAllPosts().find((post) => post.slug === slug);

    if (!post) {
        return notFound();
    }
    
    const markdown = post.content;
    console.log(markdown);

    return (
        <article className="prose lg:prose-xl">
            <MDXRemote source={markdown} />
        </article>
    )
}