import { useState } from "react";
import { Search } from "lucide-react";
import fetchProducts from "../api/fetchProducts";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = async (event) => {
    event.preventDefault();

    const products = await fetchProducts(searchValue);
    console.log(products);
    setSearchValue("");
  };

  return (
    <form
      className="rounded-full flex items-center bg-slate-50 w-full max-w-lg shadow-2xl gap-2 pr-2"
      onSubmit={handleSearch}
    >
      <input
        type="search"
        value={searchValue}
        placeholder="Pesquisar produtos"
        onChange={({ target }) => setSearchValue(target.value)}
        className="rounded-full p-2 grow outline-none font-bold text-sm "
        required
      />
      <button
        className="bg-none rounded-lg transition-all duration-300 hover:scale-110"
        type="submit"
      >
        <Search />
      </button>
    </form>
  );
}

export default SearchBar;
