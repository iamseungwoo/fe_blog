import Card from '../../components/ArticleCard/Card';
import Tag from '../../components/ArticleCard/Tag';
import SplitLine from '../../components/global/SplitLine';
import SubTitle from '../../components/global/SubTitle';
import { getAllTags, getPostsSortDateDesc } from '../../lib/post'

export default function ArticleHome() {
  const posts = getPostsSortDateDesc();
  const tags = getAllTags();

  console.log(tags);
  // console.log(posts);
  return (
    <div>
      <SubTitle subTitle={`Tag`} />
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <Tag name={tag} key={i} />
        ))}
      </div>
      <SplitLine />
      <SubTitle subTitle={`Article`} />
      <div className={`flex flex-wrap`}>
        {posts.map((post, i) => (
          <Card post={post} key={i} />
        ))}
      </div>
    </div>
  );
}
