import React from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import ShoppingCartIcon from "@/Icons/ShoppingCart";
import Book from "@/Icons/Book";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      {/* For Computer */}
      <div className="hidden lg:flex justify-between mx-3 p-3 pt-7 text-special_colors-gray">
        {/* Right Nav */}
        <div className="flex items-center">
          <Book className="w-8 text-special_colors-yellow" />
          <h1 className="text-[28px] font-bold ml-3">Pages</h1>
        </div>
        {/* Left Nav */}
        <div className="flex items-center">
          {/* links */}
          <div className="flex space-x-10 font-normal antialiased text-[17px]">
            <h3>Home</h3>
            <h3 className="flex">
              Pages <ChevronDownIcon className="w-4 ml-1" />
            </h3>
            <h3>About</h3>
            <h3>Services</h3>
            <h3>Contact</h3>
          </div>
          <div className="relative mx-5">
            <ShoppingCartIcon className="mt-2" />
            <p
              className="absolute top-[0px] px-[3px] py-[2px] bg-special_colors-yellow rounded-full text-special_colors-blue font-extrabold"
              style={{ fontSize: "10px", right: "-14px" }}
            >
              01
            </p>
          </div>
          <button className="px-7 py-2 bg-special_colors-yellow text-special_colors-blue font-bold tracking-wide text-normal ml-7">
            Order Today
          </button>
        </div>
      </div>
      {/* For Mobile Devices */}
      <div
        className={`lg:hidden absolute right-8 top-10 text-special_colors-gray rounded-md ${
          isNavOpen
            ? "bg-special_colors-yellow w-2/4 h-auto"
            : "h-0 bg-transparent"
        }transition transform duration-500`}
        onClick={() => setIsNavOpen((prevEl) => !prevEl)}
      >
        {!isNavOpen ? (
          <Bars3Icon className="h-8 ml-auto mr-2" />
        ) : (
          <XMarkIcon className="h-8 ml-auto mr-2" />
        )}
        {/* This div should have animation when shown it should have an animation like it is opening with duration */}
        <div
          className={`${!isNavOpen && "invisible"} ${
            isNavOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transition transform duration-500`}
        >
          <div className="font-normal antialiased text-[17px] text-center space-y-5 text-special_colors-blue mb-5">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Services</h3>
            <h3>Contact</h3>
          </div>
          <div className="flex items-center justify-center mt-2 text-[17px] p-2 rounded-md bg-special_colors-blue w-1/2 mx-auto">
            <div className="relative mr-4">
              <ShoppingCartIcon className="mt-2" />
              <p
                className="absolute top-[0px] px-[3px] py-[2px] bg-special_colors-yellow rounded-full text-special_colors-blue font-extrabold"
                style={{ fontSize: "10px", right: "-14px" }}
              >
                01
              </p>
            </div>
            <h3>Cart</h3>
          </div>
          <button className="p-3 bg-special_colors-blue rounded-md mx-auto block my-4">
            Order Today
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;