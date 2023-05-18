import React from "react";
import { useDispatch } from "react-redux";
import { CloseCart } from "@/Slices/header";
import Image from "next/image";

const CartItem = () => {
  const dispatch = useDispatch();
  return (
    <div className="z-10 w-full max-w-[550px]">
      <div className="w-100 bg-special_colors-yellow flex justify-between px-12 py-6">
        <h3 className="text-3xl text-special_colors-blue font-bold cardo">
          Your Cart
        </h3>
        <button
          className="text-lg text-special_colors-blue cursor-pointer"
          onClick={() => dispatch(CloseCart())}
        >
          X
        </button>
      </div>
      <div className="w-100 bg-white px-10 py-8 flex">
        <Image
          src="/images/Store/Book.png"
          width="150"
          height="100"
          alt="product"
        />
        <div className="flex flex-col justify-between pl-6 w-full py-3">
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="flex flex-col space-y-1">
              <p className="text-2xl text-special_colors-blue cardo font-semibold">
                Atomic {"One's"}
              </p>
              <p className="text-gray-400">$30.00 USD</p>
            </div>
            <input
              className="h-[45px] w-[75px] bg-gray-100 border px-3 text-gray-400 mb-2"
              disabled
              value="1"
            />
          </div>
          <p className="text-special_colors-blue cardo text-xl font-medium cursor-pointer">
            REMOVE
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
