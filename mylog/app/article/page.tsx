import Card from '../component/card';
import { getAllPosts } from '../lib/post';

export default function PostsPage() {
  const posts = getAllPosts();
  console.log(posts);
  return (
    <div className={`flex flex-wrap`}>
      {posts.map(post => (
        <Card post={post} />
      ))}
    </div>
  );
}
