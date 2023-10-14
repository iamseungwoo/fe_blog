import Link from 'next/link';
import { Post } from '../../lib/post';
import Tag from '../ArticleCard/Tag';
import PostInfo from '../ArticleCard/PostInfo';

type PostProps = {
  post: Post;
  idx: number;
};

const Card = ({ post, idx }: PostProps) => {
  const postLink = post.slug.replace('/posts/', `/article/`);
  console.log(postLink);
  return (
    <div className="flex space-x-6">
      <div className="pt-4 font-bold">{idx + 1}.</div>
      <div className="text-ye group w-full p-4 py-4 hover:drop-shadow-base">
        <Link className="hover:drop-shadow-base" href={postLink}>
          <p className="text-xl font-bold">{post.title}</p>
          <p className="text-tertiary mt-1"></p>
        </Link>
        <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map(tag => (
              <Tag name={tag} />
            ))}
          </div>
          <PostInfo date={post.date} readingTime={post.readingMinutes} />
        </div>
      </div>
    </div>
  );
};

export default Card;
