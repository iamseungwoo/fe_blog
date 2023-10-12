const SubTitle = ({ subTitle }: { subTitle: string }) => {
  return (
    <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
      {subTitle}
      {/* <span className="ml-2 text-sm">(67)</span> */}
    </h2>
  );
};

export default SubTitle;
