import Card from '@/app/component/ArticleCard/Card';
import SubTitle from '@/app/component/global/SubTitle';
import { getPostsWithTag } from '@/app/lib/post';

const Page = ({ params }: { params: { slug: string } }) => {
  const tag = decodeURI(params.slug);
  const tagPosts = getPostsWithTag(tag, );

  return (
    <>
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl flex items-end gap-4">
        Tags - {tag.toLowerCase()}{' '}
        <span className="text-2xl">({tagPosts.length})</span>
      </h1>
      <div className="bg-primary sticky top-0 z-10 my-4 -mx-2 flex items-center gap-2 bg-opacity-80 px-2 py-4 backdrop-blur transition-all dark:bg-opacity-80"></div>
      <div className="scroll-m-16">
        <p className="text-xl font-bold">
          Posts
          <span className="text-base">({tagPosts.length})</span>
        </p>
        <hr className="border-1 w-full border-neutral-300 transition-all dark:border-neutral-700 my-4" />
        <div className="flex flex-wrap">
          {tagPosts.map((post, i) => (
            <Card post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
