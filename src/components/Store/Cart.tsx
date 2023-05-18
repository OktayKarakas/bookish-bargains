import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50">
      <CartItem />
      <div className="w-full bg-white px-10 py-6 border-t flex justify-between z-10 max-w-[550px]">
        <p className="text-lg text-special_colors-blue cardo">Sub-Total</p>
        <p className="text-lg text-special_colors-blue cardo font-semibold">
          $60.00 USD
        </p>
      </div>
      <div className="w-full bg-white sm:px-10 py-4 text-center z-10 max-w-[550px]">
        <button className="bg-special_colors-yellow px-24 sm:px-36 py-3 text-special_colors-blue font-semibold mb-6">
          Continue to Checkout
        </button>
      </div>
      <div className="absolute w-full h-full bg-special_colors-blue opacity-50 z-0"></div>
    </div>
  );
};

export default Cart;
