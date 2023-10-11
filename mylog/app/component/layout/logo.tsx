import metadata from '@/app/data/metadata';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className={`items-center sm:flex`}>
      <Link href={`/`}>
        <Image
          src={`/logo.png`}
          alt="logo"
          height={40}
          width={40}
          className={``}
        />
      </Link>
      <span className={`hidden mx-2 font-extralight text-lg py-3 sm:flex font-semibold`}>
        {metadata.title}
      </span>
    </div>
  );
};

export default Logo;
