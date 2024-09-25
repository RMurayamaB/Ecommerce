import CartItem from "./CartItem";
import { useContext } from "react";
import AppContext from "/src/context/AppContext.js";
import currency from "/src/utils/currency.js";

function Cart() {
  const { cartItems, isCartOpen } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acumulator, item) => {
    return item.price + acumulator;
  }, 0);

  return (
    <section
      className={`flex flex-col w-full justify-between max-w-80 bg-white h-screen fixed top-0 right-0 pt-[100px] px-[20px] pb-[20px] transition-transform transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`} // Adiciona a classe de transformação
    >
      <div className="overflow-auto">
        {cartItems.map((cartItem, index) => (
          <CartItem
            className={index === cartItems.length - 1 ? "last:border-b-0" : ""}
            key={cartItem.id}
            data={cartItem}
          />
        ))}
      </div>
      <div className="text-xl pt-[24px] px-0 pb-[15px] border-t-[1px] border-t-gray-400">
        {currency(totalPrice, "BRL")}
      </div>
    </section>
  );
}

export default Cart;
