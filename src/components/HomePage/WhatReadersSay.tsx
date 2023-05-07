import RatingBall from "@/Icons/RatingBall";
import Reader from "./Reader";
import HalfRatingBall from "@/Icons/HalfRatingBall";

const WhatReadersSay = () => {
  return (
    <div className="flex items-center xl:space-x-5 pt-24 flex-col xl:flex-row mx-auto">
      <div className="max-w-[400px] mx-3 md:mx-0 md:mr-14">
        <h1 className="after:content-[''] after:block after:h-[2px] after:w-12 after:mt-5 after:bg-special_colors-yellow cardo font-semibold text-[45px] tracking-tight leading-tight text-special_colors-blue xl:w-[80%]">
          What Readers Say About the Book
        </h1>
        <p className="text-gray-400 text-[19px] my-5">
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there {"isn't"} anything embarrassing hidden in the middle of text.
          All the Lorem Ipsum generators.
        </p>

        <div className="flex space-x-1 items-center">
          <RatingBall className="h-full w-[28px]" />
          <RatingBall className="h-full w-[28px]" />
          <RatingBall className="h-full w-[28px]" />
          <RatingBall className="h-full w-[28px]" />
          <HalfRatingBall
            className="h-full w-[15px]"
            className2="h-full w-[28px] absolute"
            classNameMain="w-[30px]"
          />

          <p className="text-[22px] text-special_colors-blue font-semibold">
            (4.8/5)
          </p>
        </div>
        <p className="text-special_colors-blue text-[19px] mt-1">
          Overall Customer Ratings
        </p>
      </div>
      <div className="flex md:flex-row xl:flex-col flex-col md:space-x-2 xl:space-x-0 xl:space-y-5">
        <Reader
          rating={4.8}
          name="Martin Philips"
          title="Awesome Impact"
          description="All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
          img="/images/HomePage/Readers/Reader-1.png"
        />
        <Reader
          rating={4.8}
          name="Christina Louis"
          title="Great Books Collections"
          description="All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
          img="/images/HomePage/Readers/Reader-1.png"
        />
      </div>
      <Reader
        rating={4.8}
        name="James Anderson"
        title="Mind Blowing Words"
        description="All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
        img="/images/HomePage/Readers/Reader-1.png"
      />
    </div>
  );
};

export default WhatReadersSay;
