import Link from 'next/link';
import { RxNotionLogo } from 'react-icons/rx';
import SubTitle from './global/SubTitle';

const Aboutme = () => {
  return (
    <div className="px-3 py-4 text-secondary">
      <div className="border-b-2 py-4">
        <SubTitle subTitle="qyinm" />
      </div>
      <div className="mt-2">
        Backend Developer, current Republic of Korea Army
        <br />
        learning <strong>Spring Boot</strong>, using <strong>Java</strong>
      </div>

      <div className="font-semibold flex flex-row-reverse text-right mt-2">
        <Link href={``} className="flex items-center">
          <RxNotionLogo />
          resume
        </Link>
      </div>
    </div>
  );
};

export default Aboutme;
