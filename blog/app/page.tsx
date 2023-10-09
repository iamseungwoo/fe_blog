import { getAllPosts } from "./lib/post";

export default function Home() {
  console.log(getAllPosts());
  return (
    <div>
      hello world
      <div>
        asdf
      </div>
    </div>
  )
}
