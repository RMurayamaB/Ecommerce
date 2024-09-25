import { Trash2 } from "lucide-react";
import currency from "../utils/currency";
import propTypes from "prop-types";
import { useContext } from "react";
import AppContext from "/src/context/AppContext.js";

function CartItem({ data, className }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updateItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updateItems);
  };
  return (
    <section
      className={`  relative flex items-start border-b border-slate-400 pb-4 mb-4${className}`}
    >
      <img src={thumbnail} alt="Produto" className="w-16" />
      <div className="pt-0 pr-[35px] pb-0 pl-[10px]">
        <h3 className="font-medium text-sm text-neutral-500 mb-2">{title}</h3>
        <h3 className="text-2xl font-medium">{currency(price, "BRL")}</h3>

        <button
          type="button"
          className="absolute top-0 right-0"
          onClick={handleRemoveItem}
        >
          <Trash2 size={24} color="#d12e2e" />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;
