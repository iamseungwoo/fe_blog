const TagBox = ({ tagName }: { tagName: string }) => {
  return (
    <div className="rounded-lg px-2 py-0.5 transition-colors bg-secondary hover:text-primary hover:bg-tertiary text-secondary font-normal">
      {tagName}
    </div>
  );
};

export default TagBox;
