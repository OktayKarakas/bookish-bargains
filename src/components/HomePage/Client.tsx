import React from "react";
import Image from "next/image";
interface Props {
  img: string;
  title: string;
  description: string;
}

const Client = ({ img, title, description }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 w-72 h-full max-w-xs">
      <Image
        src={img}
        width={"250"}
        height={"250"}
        className="max-w-[110px] max-h-[80px] w-full h-[120px] object-contain"
        alt="client-image"
      />
      <div className="text-center">
        <h3 className="my-2 text-special_colors-blue">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Client;
