import metadata from '@/app/data/metadata';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className={`items-center sm:flex`}>
      <Image
        src={`/logo.png`}
        alt="logo"
        height={40}
        width={40}
        className={``}
      />
      <span className={`hidden mx-2 font-extralight text-lg py-3 sm:flex`}>
        {metadata.title}
      </span>
    </div>
  );
};

export default Logo;
