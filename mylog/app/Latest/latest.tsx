import SubTitle from '../component/global/SubTitle';
import { getPostsSortDateDesc } from '../lib/post';
import LatestCard from './latestCard';

const Latest = () => {
  const latestArticle = getPostsSortDateDesc().slice(0, 4);
  return (
    <div className="px-3 py-4 text-secondary">
      <div className="mt-4 mb-6">
        <SubTitle subTitle="Latest Article" />
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {latestArticle.map((article, i) => (
          <LatestCard post={article} idx={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
