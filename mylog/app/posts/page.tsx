import { getAllPosts } from '../lib/post';

export default function PostsPage() {
  const posts = getAllPosts();
  console.log(posts);
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.slug}</li>
      ))}
    </ul>
  );
}
