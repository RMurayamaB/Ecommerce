import SearchBar from "../components/SearchBar";
import CartButton from "./CartButton";

function Header() {
  return (
    <header className="bg-Orangele fixed w-full p-5 z-10">
      <div className="max-w-5xl m-auto flex  justify-between ">
        <SearchBar />
        
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
