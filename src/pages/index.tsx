import Header from "@/components/layout/Header";
import Landing from "./../components/HomePage/Landing";
import AuthorBookIncludesSection from "./../components/HomePage/AuthorBookIncludesSection";
import About from "@/components/HomePage/About";
import OurClients from "@/components/HomePage/OurClients";
import Callout from "./../components/HomePage/Callout";
import WhatWillYouLearn from "@/components/HomePage/WhatWillYouLearn";
import ChapterIncludes from "@/components/HomePage/ChapterIncludes";
import WhatReadersSay from "./../components/HomePage/WhatReadersSay";
import Subscription from "@/components/HomePage/Subscription";
import Footer from "@/components/layout/Footer";
import { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { redirectToAboutFromStore } from "../Slices/header";

export default function Home() {
  const { isRedirectedToAboutFromStore } = useSelector(
    (state: any) => state.header
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isRedirectedToAboutFromStore) {
      scroller.scrollTo("About", {
        duration: 500,
        delay: 0,
        smooth: 0.4, // Example number value for smooth scrolling
      });
      dispatch(redirectToAboutFromStore(false));
    }
  });
  return (
    <div>
      <main className="overflow-auto max-h-full">
        <div className="bg-special_colors-blue lg:h-screen max-h-full">
          <div className="max-w-7xl mx-auto h-full max-h-full min-h-full py-10 lg:py-0">
            <Header />
            <div className="lg:flex lg:items-center lg:justify-center lg:h-[90%] lg:max-h-[90%] px-3 overflow-hidden">
              <Landing />
            </div>
          </div>
        </div>
        <div className="bg-white py-10 flex items-center justify-center mb-14">
          <AuthorBookIncludesSection />
        </div>
        <div className="bg-[#F4F8FF]">
          <div
            className="bg-[#F4F8FF] py-10 flex items-center justify-center max-w-7xl mx-auto"
            id="About"
          >
            <About
              author_img={"/images/HomePage/Author.png"}
              qr_img={"/images/HomePage/author_qr.png"}
            />
          </div>
        </div>
        <div className="bg-white pt-8 pb-12 flex items-center justify-center mb-14 max-w-full max-h-full">
          <OurClients />
        </div>
        <div className="relative py-10 flex items-center justify-center max-w-full max-h-full">
          <div className="z-0 left-0 absolute w-full h-full bg-special_colors-blue"></div>
          <div className="max-w-7xl">
            <Callout />
          </div>
        </div>
        <div className="bg-white pt-8 pb-20 flex items-center justify-center mb-16 max-w-full max-h-full">
          <WhatWillYouLearn />
        </div>
        {/* Burada Kaldın.ChapterIncludes Yapılacak. */}
        <div className="pt-8 pb-20 flex items-center justify-center bg-[#F4F8FF]  max-w-full max-h-full">
          <ChapterIncludes />
        </div>
        <div className="bg-white pt-8 pb-20 flex items-center justify-center mb-16 max-w-full max-h-full">
          <WhatReadersSay />
        </div>
        <div className="bg-white pt-8 pb-20 flex items-center justify-center mb-16 max-w-full max-h-full">
          <Subscription />
        </div>
        <Footer />
      </main>
    </div>
  );
}
