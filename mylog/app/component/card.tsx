import { Post } from '../lib/post';
import PostInfo from './PostInfo';
import Tag from './Tag';

type PostProps = {
  post: Post;
};

const Card = ({ post }: PostProps) => {
  return (
    <div>
      <div className="text-ye group w-full py-4 hover:drop-shadow-base">
        <a className="hover:drop-shadow-base" href="#">
          <p className="text-xl font-bold">{post.title}</p>
          <p className="text-tertiary mt-1"></p>
        </a>
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
