import BookBlock from "./BookBlock";

const StoreMain = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
      <BookBlock />
      <BookBlock />
      <BookBlock />
      <BookBlock />
      <BookBlock />
      <BookBlock />
    </div>
  );
};

export default StoreMain;
