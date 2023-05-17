import React from "react";
import Item from "../../../components/Store/SingleProduct/Item";
import Landing from "@/components/Store/Landing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SingleItem = () => {
  return (
    <div className="overflow-auto max-h-full">
      <div className="bg-special_colors-blue max-h-full">
        <div className="max-w-7xl mx-auto h-full max-h-full min-h-full py-10 lg:py-0">
          <Header />
          <Landing />
        </div>
      </div>
      <div className="bg-white pt-8 pb-20 my-20 max-w-[1100px] mx-auto max-h-full">
        <Item />
      </div>
      <Footer />
    </div>
  );
};

export default SingleItem;
