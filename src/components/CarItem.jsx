import { RiDeleteBin2Fill } from "react-icons/ri";
function CartItem() {
  return (
    <section className="flex items-start border-b border-slate-400 pb-4 mb-4">
      <img src="" alt="Produto" className="w-16" />
      <div className="">
        <h3 className="">Titulo produto</h3>
        <h3 className="">R$ 300,00</h3>

        <button type="button" className="">
          <RiDeleteBin2Fill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;
