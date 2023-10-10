const Tag = ({ name }: { name: string }) => {
  return (
    <a href="/archives/tags/darkmode">
      <div className="rounded-lg px-2 py-0.5 transition-colors bg-secondary hover:text-primary hover:bg-tertiary text-secondary font-normal">
        {name}
      </div>
    </a>
  );
};

export default Tag;
