import BookBlock from "./BookBlock";

interface Item {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  detailedDescription: string;
  publisher: string;
  language: string;
  paperback: number;
  isbn: number;
  dimension: string;
}

interface Props {
  data: Item[];
}

const StoreMain = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {data?.map((item) => {
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
