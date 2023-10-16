import Link from 'next/link';
import { RxNotionLogo } from 'react-icons/rx';

const Aboutme = () => {
  return (
    <div className="px-3 py-4 text-secondary">
      <div className="border-b-2 py-4">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
          qyinm
        </h2>
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
