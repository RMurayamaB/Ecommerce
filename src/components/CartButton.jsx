import { ShoppingBasket } from "lucide-react";
import { useContext } from "react";
import AppContext from "/src/context/AppContext.js";

function CartButton() {
  const { cartItems, setIsCartOpen } = useContext(AppContext);

  const handleCartToggle = () => {
    setIsCartOpen((prevState) => !prevState); // Alterna o estado do carrinho
  };

  return (
    <button
      type="button"
      className="flex relative transition-all duration-200 hover:scale-110"
      onClick={handleCartToggle} // Adiciona o evento de clique
    >
      <ShoppingBasket size={36} color="#ffffff" strokeWidth={1.5} />
      {cartItems.length > 0 && (
        <span className="bg-red-600 rounded-full absolute w-4 h-4 top-0 right-0 text-white text-xs font-bold flex items-center justify-center">
          {cartItems.length}
        </span>
      )}
    </button>
  );
}

export default CartButton;
