import metadata from '@/app/data/metadata';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className={`hidden items-center sm:flex`}>
      <Image
        src={`/logo.png`}
        alt="logo"
        width={40}
        height={40}
        objectFit={`cover`}
        className={`rounded-full`}
      />
      <span className={`mx-2 font-extralight text-lg py-3`}>
        {metadata.title}
      </span>
    </div>
  );
};

export default Logo;
