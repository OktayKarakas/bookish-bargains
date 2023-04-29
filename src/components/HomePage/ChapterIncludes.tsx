import React from "react";
import ChapterIncludesBlock from "./ChapterIncludesBlock";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const ChapterIncludes = () => {
  const contentsInBlocks = [
    {
      title: "Chapter- 01   Get Started Intro",
      description:
        "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pageNum: "85pages",
      time: "1 Hour 15 mins",
    },
    {
      title: "Chapter- 02   Get Started Intro",
      description:
        "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pageNum: "85pages",
      time: "1 Hour 15 mins",
    },
    {
      title: "Chapter- 03   Get Started Intro",
      description:
        "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pageNum: "85pages",
      time: "1 Hour 15 mins",
    },
    {
      title: "Chapter- 04   Get Started Intro",
      description:
        "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pageNum: "85pages",
      time: "1 Hour 15 mins",
    },
  ];
  return (
    <div>
      <h1 className="after:content-[''] after:block after:h-[3px] after:w-12 after:mt-5 after:bg-special_colors-yellow after:mx-auto mb-10 mt-24 text-center cardo font-bold text-4xl line-tight text-special_colors-blue">
        The Capter Includes
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {contentsInBlocks.map((item) => (
          <ChapterIncludesBlock key={uuidv4()} item={item} />
        ))}
      </div>
      <button className="mx-auto text-center block py-5 px-28 text-special_colors-blue bg-special_colors-yellow font-bold text-[19px] mt-14">
        Start a 15-Days Free Trail
      </button>
      <p className="text-center text-[18px] lg:px-[38%] mt-5 text-gray-400">
        Short description about each chapter{" "}
        <Link href="/">
          <span className="text-[#1B3764] underline underline-offset-4">
            Have any questions?
          </span>
        </Link>{" "}
        Contact us
      </p>
    </div>
  );
};

export default ChapterIncludes;
