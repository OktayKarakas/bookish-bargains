import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { CloseCart } from "@/Slices/header";
import { v4 as uuidv4 } from "uuid";

interface ItemsAmounts {
  id: string;
  amount: number;
}

interface Item {
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

const Cart = () => {
  const dispatch = useDispatch();
  const { itemsAmounts, items } = useSelector((state: any) => state.header);

  function totalPrice() {
    return items.reduce((total: number, item: Item) => {
      const matchingAmount = itemsAmounts.find(
        (amount: ItemsAmounts) => amount.id === item.id
      );
      const amount = matchingAmount ? matchingAmount.amount : 0;
      return amount * item.price + total;
    }, 0);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50">
      <div className="bg-special_colors-yellow flex justify-between px-12 py-6 z-10 w-full max-w-[550px]">
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
      <div className="max-h-64 overflow-y-scroll z-10 w-full max-w-[550px]">
        {itemsAmounts.map((item: ItemsAmounts) => {
          return <CartItem key={uuidv4()} id={item.id} />;
        })}
      </div>
      <div className="w-full bg-white px-10 py-6 border-t flex justify-between z-10 max-w-[550px]">
        <p className="text-lg text-special_colors-blue cardo">Sub-Total</p>
        <p className="text-lg text-special_colors-blue cardo font-semibold">
          ${totalPrice() > 0 ? totalPrice() : 0}
        </p>
      </div>
      <div className="w-full bg-white sm:px-10 py-4 text-center z-10 max-w-[550px]">
        <button
          className="bg-special_colors-yellow disabled:bg-gray-200 disabled:text-gray-400 disabled:font-light px-24 sm:px-36 py-3 text-special_colors-blue font-semibold mb-6"
          disabled={itemsAmounts.length <= 0}
        >
          {itemsAmounts.length > 0
            ? "Continue to checkout"
            : "Add items to your cart"}
        </button>
      </div>
      <div className="absolute w-full h-full bg-special_colors-blue opacity-50 z-0"></div>
    </div>
  );
};

export default Cart;
