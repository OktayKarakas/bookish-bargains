import Point from "@/Icons/Point";
import Image from "next/image";

const BookBlock = () => {
  return (
    <div className="w-[300px] first-letter:md:w-[400px] mt-10 mx-auto">
      <Image
        src="/images/Store/Book.png"
        width="300"
        height="400"
        alt="book"
        className="w-[300px] md:w-[400px] p-5 pt-8 bg-[#F5F8FC] mx-auto"
      />
      <div className="my-2">
        <div className="flex justify-between">
          <h3 className="text-special_colors-blue text-2xl cardo font-semibold">
            Atomic One’s
          </h3>
          <p className="text-special_colors-yellow text-lg font-semibold">
            $23.89
          </p>
        </div>
        <div>
          <p className="text-[#969AA0] text-base">
            Many variations of passages of Lorem Ipsum willing araise alteration
            in some form.
          </p>
          <div className="flex items-center my-2">
            <Point />
            <h4 className="ml-2 text-special_colors-blue font-semibold text-base">
              Printed Books
            </h4>
          </div>
          <button className="border-2 border-yellow-300 px-10 py-3 mt-5 bg-white text-special_colors-blue mx-auto">
            Order Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookBlock;
