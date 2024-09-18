import CartItem from "./CarItem";

function Cart() {
  return (
    <section className="w-full max-w-80 bg-white h-screen fixed top-0 right-0 pt-[100px] px-[20px] pb-[20px]">
      <div>
        <CartItem />
      </div>
      <div>Resumo do carrinho</div>
      Carrinho
    </section>
  );
}

export default Cart;
