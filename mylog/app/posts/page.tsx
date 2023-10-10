import Card from '../component/card';
import { getAllPosts } from '../lib/post';

export default function PostsPage() {
  const posts = getAllPosts();
  console.log(posts);
  return (
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Card post={post} />
        </li>
      ))}
    </ul>
  );
}
