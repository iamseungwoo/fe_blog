const BookCard = ({ bookName }: { bookName: string }) => {
  return (
    <div className="relative h-56 w-40 select-none rounded-lg bg-neutral-200 px-8 pt-8 pb-12 shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl dark:bg-neutral-800">
      <div className="absolute inset-y-0 left-2.5 w-[1px] bg-neutral-100 dark:bg-neutral-700"></div>
      <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium dark:bg-neutral-700 dark:text-white">
        {bookName}
      </div>
    </div>
  );
};

export default BookCard;
