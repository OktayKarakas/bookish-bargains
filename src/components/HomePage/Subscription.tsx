import React from "react";

const Subscription = () => {
  return (
    <div className="bg-special_colors-yellow h-full pb-32 pt-24 w-full max-w-[1300px]">
      <h1 className="after:content-[''] after:block after:h-[3px] after:w-12 after:mt-2 after:bg-special_colors-blue after:mx-auto mb-5 text-center cardo font-bold text-[45px] line-tight text-special_colors-blue">
        Read a free chapter
      </h1>
      <p className="mx-auto text-center text-[19px] text-special_colors-blue max-w-[650px] px-2 pb-7">
        Making this the first true value generator on the Internet. It of over
        200 Latin words, combined with a handful.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4">
        <input
          type="text"
          className="w-[300px] lg:w-[530px] h-[65px] pl-6 text-[17px]"
          placeholder="Your Email id..."
        />
        <button className="bg-special_colors-blue w-[300px] h-[65px] text-white text-[19px] font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscription;
