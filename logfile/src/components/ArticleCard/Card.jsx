import { Link } from 'react-router-dom';
import PostInfo from './PostInfo';
import Tag from './Tag';

const Card = ({ post }) => {
  const postLink = post.slug.replace('/posts/', `/article/`);
  console.log(postLink);
  return (
    <div className="text-ye group w-full sm:w-1/2 p-4 py-4 hover:drop-shadow-base">
      <Link className="hover:drop-shadow-base" to={postLink}>
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
  );
};

export default Card;
