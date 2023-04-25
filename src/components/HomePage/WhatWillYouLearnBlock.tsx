import React from "react";

interface Props {
  number: string;
  description: string;
}

const WhatWillYouLearnBlock = ({ number, description }: Props) => {
  return (
    <div className="bg-[#F4F8FF] w-[290px] max-w-[290px] max-h-[300px] py-8 px-10 rounded-md">
      <p className="text-special_colors-blue bg-special_colors-yellow font-bold cardo text-[24px] w-[50px] h-[50px] items-center justify-center radius-full rounded-full inline-flex mt-2">
        {number}
      </p>
      <p className="text-[21px] text-special_colors-blue mt-8 font-semibold">
        {description}
      </p>
    </div>
  );
};

export default WhatWillYouLearnBlock;
