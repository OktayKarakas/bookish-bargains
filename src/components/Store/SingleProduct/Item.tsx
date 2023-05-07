import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AddCartItemNum } from "@/Slices/header";
import { useRef } from "react";

const Item = () => {
  const dispatch = useDispatch();
  const itemNum = useRef<HTMLInputElement>(null);
  function handleClick() {
    if (
      Number(itemNum.current?.value) <= 0 &&
      itemNum.current &&
      itemNum.current.value
    ) {
      dispatch(AddCartItemNum(1));
      alert(
        "You can't add less then one item.One item is added to your cart as it is the default value."
      );
    } else if (itemNum.current && itemNum.current.value) {
      alert(itemNum.current.value + " item(s) added to your cart.");
      dispatch(AddCartItemNum(Number(itemNum.current.value)));
    }
  }
  return (
    <div className="flex flex-col items-center px-5 lg:px-0 lg:flex-row lg:space-x-12">
      <Image src="/images/Store/Book.png" width="380" height="510" alt="book" />
      <div>
        <h3 className="cardo font-semibold text-2xl text-special_colors-blue">
          The Atomic {"One's"}
        </h3>
        <p className="text-special_colors-yellow text-xl font-semibold">
          $30<span>.00 USD</span>
        </p>
        <p className="text-base text-[#969AA0] max-w-[500px] leading-[180%] my-4">
          Making this the first true generator on the Internet. It uses a
          dictionary of over 200 Latin words, combined with a handful of model
          sentence structures, to generate Lorem Ipsum which looks reasonable.
          The generated Lorem Ipsum.
        </p>
        <div className="text-base text-[#969AA0] flex flex-col space-y-2 mt-2">
          <h4>Publisher : Learning Private Limited (1 January 2021)</h4>
          <h4>Language : English</h4>
          <h4>Paperback : 212 pages</h4>
          <h4>ISBN-10 : 9788120345799</h4>
          <h4>Dimensions : 20 x 14 x 4 cm</h4>
        </div>
        <div>
          <input
            type="number"
            id="quantity"
            name="quantity"
            defaultValue="1"
            placeholder="Add quantity"
            className="border-2 border-yellow-300 px-2 max-w-[155px] h-[45px] mt-5 mr-5 max-h-[45px] text-center bg-white text-special_colors-blue mx-auto"
            ref={itemNum}
          />
          <button
            className="px-7 h-[45px] bg-special_colors-yellow max-h-[45px] text-special_colors-blue font-bold tracking-wide text-normal"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
