import { ShoppingBasket } from "lucide-react";

function CartButton() {
  return (
    <button
      type="button"
      className="flex relative transition-all  duration-200 hover:scale-110"
    >
      <ShoppingBasket size={36} color="#ffffff" strokeWidth={1.5} />
      <span className="bg-red-600 rounded-full absolute w-4 h-4 top-0 right-0 text-white text-xs font-bold flex items-center justify-center">
        1
      </span>
    </button>
  );
}

export default CartButton;
