import { Post } from '@/app/lib/post';
import Link from 'next/link';

const PostTitle = ({ post }: { post: Post }) => {
  const slugs = post.slug.split('/').filter(el => el != '');
  const series = slugs[1];

  return (
    <div style={{ opacity: 1, willChange: 'opacity' }}>
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl mx-auto mb-4 max-w-3xl text-center">
        {post.title}
      </h1>
      <div className="mt-2 flex justify-center gap-1">
        <Link href={`/blog/${series}`}>
          <span className="text-sm font-medium underline sm:text-base">
            {series}
          </span>
        </Link>
      </div>
      <div className="mt-2 flex w-full flex-col justify-between md:flex-row md:items-center">
        <div className="mx-auto flex gap-2 text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="14"
              height="14"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              ></path>
            </svg>
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="14"
              height="14"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>{post.readingMinutes}분</span>
          </div>
        </div>
      </div>
      <hr className="border-1 w-full border-neutral-300 transition-all dark:border-neutral-700 mt-4" />
    </div>
  );
};

export default PostTitle;
