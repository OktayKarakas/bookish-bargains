import React from "react";
import Client from "./Client";
import Slider from "react-slick";

const OurClients = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 0,
    arrows: false,
    draggable: false,
    dots: false,
    pauseOnHover: false,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          initialSlide: 1.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-h-full max-w-full py-5">
      <h1 className="after:content-[''] after:block after:h-[2px] after:w-12 after:mt-5 after:bg-special_colors-yellow after:mx-auto my-10 text-center cardo font-bold text-4xl line-tight text-special_colors-blue">
        Trusted By The Best
      </h1>
      <Slider {...settings}>
        <Client
          img={"/images/HomePage/clients/Logo-1.svg"}
          title={"Amazen Corp"}
          description={
            "A long established fact that a who looking at its layout"
          }
        />
        <Client
          img={"/images/HomePage/clients/Logo-2.svg"}
          title={"Megan Books"}
          description={
            "A long established fact that a who looking at its layout"
          }
        />
        <Client
          img={"/images/HomePage/clients/Logo-3.svg"}
          title={"Los Books"}
          description={
            "A long established fact that a who looking at its layout."
          }
        />
        <Client
          img={"/images/HomePage/clients/Logo-4.svg"}
          title={"Urban Lib"}
          description={
            "A long established fact that a who looking at its layout"
          }
        />
      </Slider>
    </div>
  );
};

export default OurClients;
