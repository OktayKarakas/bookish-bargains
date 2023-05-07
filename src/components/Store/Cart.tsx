import { useDispatch } from "react-redux";
import { CloseCart } from "@/Slices/header";

const Cart = () => {
  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <p
        className="relative z-10 text-black"
        onClick={() => dispatch(CloseCart())}
      >
        Modal
      </p>
      <div className="absolute w-full h-full bg-special_colors-blue opacity-50 z-0"></div>
    </div>
  );
};

export default Cart;
