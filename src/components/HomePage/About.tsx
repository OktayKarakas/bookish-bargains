import React from "react";
import Image from "next/image";

interface Props {
  author_img: string;
  qr_img: string;
}

const About = ({ author_img, qr_img }: Props) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row pt-24 pb-12 px-5 lg:px-0 lg:space-x-24 items-center">
        <Image src={author_img} width={590} height={690} alt="author-image" />
        <div>
          <h1 className="after:content-[''] after:block after:h-[2px] after:w-12 after:mt-5 after:bg-special_colors-yellow cardo font-semibold text-5xl tracking-tight leading-tight text-special_colors-blue">
            About Author
          </h1>
          <p className="text-gray-400 py-5 leading-relaxed text-lg lg:w-11/12">
            All the Lorem Ipsum generators on the Internet tend to repeated
            predefined chunks as necessary, making this the first true value
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful.
          </p>
          <div className="flex space-x-10">
            <div className="border-r-[1px] pr-5 border-special_colors-yellow">
              <h3 className="text-special_colors-blue text-5xl cardo font-bold">
                02
              </h3>
              <p className="text-gray-400">Books Published</p>
            </div>
            <div>
              <h3 className="text-special_colors-blue text-5xl cardo font-bold">
                4.5
              </h3>
              <p className="text-gray-400">User Reviews</p>
            </div>
            <div className="border-l-[1px] pl-5 border-special_colors-yellow">
              <h3 className="text-special_colors-blue text-5xl cardo font-bold">
                04
              </h3>
              <p className="text-gray-400">Best Seller Awards</p>
            </div>
          </div>
          <div className="flex flex-col-reverse xl:flex-row space-x-10 bg-special_colors-blue py-3 px-4 w- w-fit mt-10">
            <Image
              src={qr_img}
              width={130}
              height={130}
              alt="author-qr"
              className="mx-auto"
            />
            <div className="self-center">
              <h2 className="text-special_colors-yellow font-medium text-[22px] cardo">
                John Abraham , Ph.d
              </h2>
              <p className="text-special_colors-darkGray text-[19px]">
                Mail:johnabraham@gmail.com
              </p>
              <p className="text-special_colors-darkGray text-[19px]">
                Phone: (+2) 123 545 9000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
