import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { DecreaseCartItemNum, RemoveItem } from "../../Slices/header";

interface CartItemProps {
  id: string | null | undefined;
}

const CartItem = ({ id }: CartItemProps) => {
  const dispatch = useDispatch();
  const { items, itemsAmounts } = useSelector((state: any) => state.header);
  const itemData = items.find((item: any) => item.id === id);
  const { amount } = itemsAmounts.find((item: any) => item.id === id);
  return (
    <div className="z-10 w-full max-w-[550px]">
      <div className="w-100 bg-white px-10 py-8 flex">
        <Image src={itemData.image} width="150" height="100" alt="product" />
        <div className="flex flex-col justify-between pl-6 w-full py-3">
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="flex flex-col space-y-1">
              <p className="text-2xl text-special_colors-blue cardo font-semibold">
                {itemData.name}
              </p>
              <p className="text-gray-400">${itemData.price}</p>
            </div>
            <input
              className="h-[45px] w-[75px] bg-gray-100 border px-3 text-gray-400 mb-2"
              disabled
              value={amount}
            />
          </div>
          <p
            className="text-special_colors-blue cardo text-xl font-medium cursor-pointer"
            onClick={() => {
              dispatch(DecreaseCartItemNum(amount));
              dispatch(RemoveItem(id));
            }}
          >
            REMOVE
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
