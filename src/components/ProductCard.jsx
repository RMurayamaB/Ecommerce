import { TbShoppingBagPlus } from "react-icons/tb";
import propTypes from "prop-types";
import currency from "../utils/currency";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function ProductCard({ data }) {
  const { thumbnail, title, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };
  return (
    <section className="flex flex-col h-full cursor-pointer w-full max-w-64 bg-white m-auto rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="produto"
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex-grow">
        <h2 className="text-2xl font-medium mb-2">{currency(price, "BRL")}</h2>
        <h2 className="text-base text-black/50 leading-6 font-medium">
          {title}
        </h2>
      </div>

      <button
        type="button"
        className="flex items-center justify-center gap-1 p-2 bg-Orangele text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 m-4"
        onClick={handleAddCart}
      >
        <TbShoppingBagPlus className="text-xl" />
        <span>Adicionar ao carrinho</span>
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.prototype = {
  data: propTypes.shape({}),
}.isRequired;
