import React, { useEffect } from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import ShoppingCartIcon from "@/Icons/ShoppingCart";
import Book from "@/Icons/Book";
import { useState } from "react";
import Link from "next/link";
import { scroller } from "react-scroll";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { redirectToAboutFromStore, OpenCart } from "../../Slices/header";
import Cart from "../Store/Cart";

const Header = () => {
  const { isCartOpen } = useSelector((state: any) => state.header);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { cartItemNum } = useSelector((state: any) => state.header);
  const router = useRouter();
  const dispatch = useDispatch();
  function handleAboutClick() {
    if (router.pathname === "/store") {
      dispatch(redirectToAboutFromStore(true));
    } else {
      dispatch(redirectToAboutFromStore(false));
      scroller.scrollTo("About", {
        duration: 500,
        delay: 0,
        smooth: 0.4, // Example number value for smooth scrolling
      });
    }
  }

  useEffect(() => {
    // Add this effect to disable scrolling when Cart is open
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);
  return (
    <>
      {isCartOpen && <Cart />}
      {/* For Computer */}
      <div className="hidden lg:flex justify-between max-h-[10%] h-[10%] mx-3 p-3 pt-7 text-special_colors-gray">
        {/* Right Nav */}
        <div className="flex items-center">
          <Book className="w-8 text-special_colors-yellow" />
          <h1 className="text-[28px] font-bold ml-3">Pages</h1>
        </div>
        {/* Left Nav */}
        <div className="flex items-center">
          {/* links */}
          <div className="flex space-x-10 font-normal antialiased text-[17px]">
            <h3>
              <Link href="/">Home</Link>
            </h3>
            <h3 className="flex">
              Pages <ChevronDownIcon className="w-4 ml-1" />
            </h3>
            <h3>
              <Link href="/">
                <span onClick={handleAboutClick}>About</span>
              </Link>
            </h3>
            <h3>
              <Link href="/store">Store</Link>
            </h3>
            <h3>
              <Link href="/contact">Contact</Link>
            </h3>
          </div>
          <div className="relative mx-5" onClick={() => dispatch(OpenCart())}>
            <ShoppingCartIcon className="mt-2" />
            <p
              className="absolute top-[0px] px-[3px] py-[2px] bg-special_colors-yellow rounded-full text-special_colors-blue font-extrabold"
              style={{ fontSize: "10px", right: "-14px" }}
            >
              {cartItemNum < 10 ? "0" + cartItemNum : cartItemNum}
            </p>
          </div>
          <button className="px-7 py-2 bg-special_colors-yellow text-special_colors-blue font-bold tracking-wide text-normal ml-7">
            Order Today
          </button>
        </div>
      </div>
      {/* For Mobile Devices */}
      <div
        className={`z-50 lg:hidden fixed right-4 top-10 text-special_colors-yellow rounded-md ${
          isNavOpen
            ? "bg-special_colors-yellow w-2/4 h-auto"
            : "h-0 bg-transparent"
        }transition transform duration-500`}
        onClick={() => setIsNavOpen((prevEl) => !prevEl)}
      >
        {!isNavOpen ? (
          <Bars3Icon className="h-8 ml-auto mr-2" />
        ) : (
          <XMarkIcon className="h-8 ml-auto mr-2 text-black" />
        )}
        <div
          className={`${!isNavOpen && "invisible"} ${
            isNavOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transition transform duration-500`}
        >
          <div className="font-normal antialiased text-[17px] text-center space-y-5 text-special_colors-blue mb-5">
            <h3>
              <Link href="/">Home</Link>
            </h3>
            <h3>
              <Link href="/">
                <span onClick={handleAboutClick}>About</span>
              </Link>
            </h3>
            <h3>
              <Link href="/store">Store</Link>
            </h3>
            <h3>Contact</h3>
          </div>
          <div className="flex items-center justify-center mt-2 text-[17px] p-2 rounded-md bg-special_colors-blue w-1/2 mx-auto">
            <div className="relative mr-4" onClick={() => dispatch(OpenCart())}>
              <ShoppingCartIcon className="mt-2" />
              <p
                className="absolute top-[0px] px-[3px] py-[2px] bg-special_colors-yellow rounded-full text-special_colors-blue font-extrabold"
                style={{ fontSize: "10px", right: "-14px" }}
              >
                {cartItemNum < 10 ? "0" + cartItemNum : cartItemNum}
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
