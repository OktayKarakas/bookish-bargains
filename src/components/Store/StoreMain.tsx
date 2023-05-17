import BookBlock from "./BookBlock";
import { bookData } from "../../data.js";

const StoreMain = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {bookData.map((item) => {
        return (
          <BookBlock
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default StoreMain;
