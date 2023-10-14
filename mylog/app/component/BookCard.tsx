const BookCard = ({ bookName }: { bookName: string }) => {
  return (
    <div className="relative mx-auto h-[336px] w-[240px] select-none rounded-lg bg-neutral-200 px-11 pb-16 pt-12 dark:bg-neutral-800">
      <div className="absolute inset-y-0 left-2.5 w-[1px] bg-neutral-100 dark:bg-neutral-700"></div>
      <div className="text-primary flex h-full break-keep bg-neutral-50 px-3 py-4 text-xl font-semibold dark:bg-neutral-700">
        {bookName}
      </div>
    </div>
  );
};

export default BookCard;
