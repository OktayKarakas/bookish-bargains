import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AddCartItemNum, AddItem } from "@/Slices/header";
import { useRef } from "react";
import { useRouter } from "next/router";
import { findData } from "@/data";

interface SingleItemTypes {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  detailedDescription: string;
  publisher: string;
  language: string;
  paperback: number;
  isbn: number;
  dimension: string;
}

const Item = () => {
  const dispatch = useDispatch();
  const itemNum = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [singleItem, setSingleItem] = useState<
    SingleItemTypes | null | undefined
  >(null);

  useEffect(() => {
    if (router.query.itemId) {
      const foundItem: SingleItemTypes = findData(router.query.itemId);
      setSingleItem(foundItem || null);
    }
  }, [router]);

  if (singleItem === undefined) {
    router.push("/404");
  }

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
      dispatch(
        AddItem({
          item: singleItem,
          amountItem: { id: singleItem!.id, amount: 1 },
        })
      );
    } else if (itemNum.current && itemNum.current.value) {
      alert(itemNum.current.value + " item(s) added to your cart.");
      dispatch(AddCartItemNum(Number(itemNum.current.value)));
      dispatch(
        AddItem({
          item: singleItem,
          amountItem: {
            id: singleItem!.id,
            amount: Number(itemNum.current.value),
          },
        })
      );
    }
  }
  if (singleItem === null) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col items-center px-5 lg:px-0 lg:flex-row lg:space-x-12">
      <Image src="/images/Store/Book.png" width="380" height="510" alt="book" />
      <div>
        <h3 className="cardo font-semibold text-2xl text-special_colors-blue">
          {singleItem?.name}
        </h3>
        <p className="text-special_colors-yellow text-xl font-semibold">
          ${singleItem?.price} USD
        </p>
        <p className="text-base text-[#969AA0] max-w-[500px] leading-[180%] my-4">
          {singleItem?.detailedDescription}
        </p>
        <div className="text-base text-[#969AA0] flex flex-col space-y-2 mt-2">
          <h4>Publisher : {singleItem?.publisher}</h4>
          <h4>Language : {singleItem?.language}</h4>
          <h4>Paperback : {singleItem?.paperback} page(s)</h4>
          <h4>ISBN-10 : {singleItem?.isbn}</h4>
          <h4>Dimensions : {singleItem?.dimension}</h4>
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
            className="px-7 h-[45px] bg-special_colors-yellow max-h-[45px] text-special_colors-blue font-bold tracking-wide text-normal hover:bg-yellow-500 duration-150"
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
