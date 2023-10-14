import Link from "next/link";

const Tag = ({ name }: { name: string }) => {
  return (
    <Link href={`/tags/${name}`}>
      <div className="rounded-lg px-2 py-0.5 transition-colors bg-secondary hover:text-primary hover:bg-tertiary text-secondary font-normal">
        {name}
      </div>
    </Link>
  );
};

export default Tag;
