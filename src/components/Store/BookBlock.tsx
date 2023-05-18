import Point from "@/Icons/Point";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

const BookBlock = ({ id, image, name, price, description }: Props) => {
  const router = useRouter();
  return (
    <div className="w-[300px] first-letter:md:w-[400px] mt-10 mx-auto">
      <Image
        src={image}
        width="300"
        height="400"
        alt="book"
        className="w-[300px] md:w-[400px] p-5 pt-8 bg-[#F5F8FC] mx-auto"
      />
      <div className="my-2">
        <div className="flex justify-between">
          <h3 className="text-special_colors-blue text-2xl cardo font-semibold">
            {name}
          </h3>
          <p className="text-special_colors-yellow text-lg font-semibold">
            ${price}
          </p>
        </div>
        <div>
          <p className="text-[#969AA0] text-base">{description}</p>
          <div className="flex items-center my-2">
            <Point />
            <h4 className="ml-2 text-special_colors-blue font-semibold text-base">
              Printed Books
            </h4>
          </div>
          <button
            className="border-2 border-yellow-300 px-10 py-3 mt-5 bg-white text-special_colors-blue mx-auto hover:bg-yellow-300 duration-150 transition"
            onClick={() => {
              router.push(`/store/${id}`);
            }}
          >
            Order Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookBlock;
