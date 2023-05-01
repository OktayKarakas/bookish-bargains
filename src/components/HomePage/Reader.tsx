import Image from "next/image";
import RatingBall from "@/Icons/RatingBall";
import HalfRatingBall from "@/Icons/HalfRatingBall";
import { v4 as uuidv4 } from "uuid";

interface Props {
  rating: number;
  name: string;
  img: string;
  description: string;
  title: string;
}

const Reader = ({ rating, name, img, description, title }: Props) => {
  function starIcon(rating: number) {
    const starIcon = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      starIcon.push(<RatingBall key={uuidv4()} className="w-[12px]" />);
    }
    if (Math.floor(rating) < rating) {
      starIcon.push(
        <HalfRatingBall key={uuidv4()} className2="absolute w-[12px]" />
      );
    }

    return starIcon;
  }
  return (
    <div className="bg-special_colors-blue xl:pr-0 my-5 xl:my-0 px-6 pt-8 pb-5 max-w-[360px] overflow-hidden">
      <div className="flex space-x-5 items-center">
        <Image
          src={img}
          width="183"
          height="274"
          alt="reader-profile-pic"
          className="w-[85px] h-[85px] rounded-full"
        />
        <div>
          <p className="text-white font-semibold text-2xl line-clamp-1">
            {name}
          </p>
          <div className="flex space-x-1 items-center">{starIcon(rating)}</div>
        </div>
      </div>
      <h4 className="text-white text-2xl font-semibold cardo my-3">
        {`“ ${title} ”`}
      </h4>
      <p className="text-gray-400 text-lg w-[90%]">{description}</p>
    </div>
  );
};

export default Reader;
