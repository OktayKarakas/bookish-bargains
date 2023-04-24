import React from "react";
import Image from "next/image";
import Point from "@/Icons/Point";

const Landing = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-3 lg:p-3 max-h-full">
      {/* Text side */}
      <div className="self-center">
        {/* text col side */}
        <div>
          <h2
            className={`before:content-[""] before:h-[2px] before:w-8 before:bg-special_colors-yellow before:inline-block before:align-middle before:mr-2 text-special_colors-gray italic text-2xl cardo mb-5`}
          >
            Welcome to Pages
          </h2>
          <h1 className="text-special_colors-gray text-6xl lg:w-3/4 cardo font-bold mb-5">
            Books are uniquely portable magic
          </h1>
          <p className="text-special_colors-darkGray text-lg leading-relaxed lg:w-3/4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        {/* buttons */}
        <div className="flex space-x-3 lg:space-x-5 mt-5">
          <button className="p-4 lg:px-12 lg:py-4 bg-special_colors-yellow text-special_colors-blue font-bold">
            Order Today
          </button>
          <button className="underline p-4 lg:px-12 lg:py-3 text-special_colors-gray underline-offset-8 font-bold">
            Read Free Demo
          </button>
        </div>
        {/* page details */}
        <div className="flex mt-8 space-x-14 mx-6 md:space-x-28">
          <div className="flex flex-col">
            <div className="flex items-center">
              <Point className="-ml-6" />
              <h3 className="text-special_colors-gray font-bold cardo text-xl">
                Pages:
              </h3>
            </div>
            <p className="text-special_colors-darkGray">586 pages</p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Point className="-ml-6" />
              <h3 className="text-special_colors-gray font-bold cardo text-xl">
                Length:
              </h3>
            </div>
            <p className="text-special_colors-darkGray">10 Hours</p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Point className="-ml-6" />
              <h3 className="text-special_colors-gray font-bold cardo text-xl">
                Ratings:
              </h3>
            </div>
            <p className="text-special_colors-darkGray">4.5/5 (305 ratings)</p>
          </div>
        </div>
      </div>
      {/* Image Side */}
      <div className="relative md:self-center lg:self-auto max-h-full">
        <Image
          src="/images/HomePage/Book.jpg"
          alt="page-book"
          width={592}
          height={800}
          className="object-contain max-h-full py-5"
        />
      </div>
    </div>
  );
};

export default Landing;
