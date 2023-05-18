import Point from "@/Icons/Point";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  img: string;
  title: string;
  description: string;
}

const AuthorBooksIncludesBooks = ({ img, title, description }: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-nowrap lg:flex-row">
      <Image
        src={img}
        alt="book"
        width={300}
        height={400}
        className="mx-auto lg:mx-0"
      />
      <div className="lg:max-w-xs px-12 pl-4 lg:mt-7">
        <h1 className="cardo font-bold text-3xl text-special_colors-blue mb-5">
          {title}
        </h1>
        <p className="text-gray-400">{description}</p>
        <div className="flex mt-8 space-x-14 mx-6 md:space-x-28">
          <div className="flex flex-col">
            <div className="flex items-center">
              <Point className="-ml-6" />
              <h3 className="text-special_colors-blue font-bold cardo text-xl">
                Pages:
              </h3>
            </div>
            {/* this paragraph is wrapping and i dont want it. */}
            <p className="text-gray-400 whitespace-nowrap">586 pages</p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Point className="-ml-6" />
              <h3 className="text-special_colors-blue font-bold cardo text-xl">
                Length:
              </h3>
            </div>
            <p className="text-gray-400 whitespace-nowrap">10 Hours</p>
          </div>
        </div>
        <button
          className="border-2 border-yellow-300 px-10 py-3 mt-5 bg-white text-special_colors-blue mx-auto hover:bg-yellow-300 hover:font-semibold transition duration-150"
          onClick={() => router.push("/store")}
        >
          Order Today
        </button>
      </div>
    </div>
  );
};

export default AuthorBooksIncludesBooks;
