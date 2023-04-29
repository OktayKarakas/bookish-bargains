import Point from "@/Icons/Point";
import React from "react";

interface Props {
  item: { title: string; description: string; pageNum: string; time: string };
}

const ChapterIncludesBlock = ({
  item: { title, description, pageNum, time },
}: Props) => {
  return (
    <div className="px-12 py-10 shadow-lg max-w-[630px] bg-white">
      <h3 className="cardo font-semibold text-2xl text-special_colors-blue">
        {title}
      </h3>
      <p className="text-[19px] max-w-[500px] text-gray-400 my-3 leading-[180%]">
        {description}
      </p>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0">
        <div className="flex items-center flex-grow">
          <Point className="mr-3" />
          <div className="flex items-center space-x-2">
            <h3 className="text-special_colors-blue font-bold cardo text-[22px]">
              Pages:
            </h3>
            <p className="text-[18px] mt-1 text-gray-400">{pageNum}</p>
          </div>
        </div>
        <div className="flex items-center flex-grow">
          <Point className="mr-3" />
          <div className="flex items-center space-x-2">
            <h3 className="text-special_colors-blue font-bold cardo text-[22px]">
              Length:
            </h3>
            <p className="text-[18px] mt-1 text-gray-400">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterIncludesBlock;
