import Image from "next/image";
import React from "react";

const Callout = () => {
  return (
    <div className="relative">
      <div className="z-[25] relative flex flex-col lg:flex-row items-center px-5">
        <div>
          <h3 className="text-white cardo text-5xl font-semibold after:content[''] after:block after:h-[4px] after:my-5 after:bg-special_colors-yellow after:w-14">
            Get Book Copy Today!
          </h3>

          <p className="text-special_colors-darkGray text-lg leading-loose my-5 w-3/4">
            This the first true value generator on the Internet. It uses alphas
            dictionary of over 200 Latin words.
          </p>

          <button className="border border-yellow-300 px-10 py-3 mt-5 bg-special_colors-blue text-white mx-auto cardo text-lg font-semibold">
            Order Today
          </button>
        </div>
        <Image
          src={"/images/HomePage/BannerPhoto.svg"}
          width={640}
          height={427}
          alt={"Book and coffee photo"}
        />
      </div>
    </div>
  );
};

export default Callout;
