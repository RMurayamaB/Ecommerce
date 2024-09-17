import { useState, useEffect } from "react";
import fetchProducts from "../api/fetchProducts";
import ProductCard from "./ProductCard";
import Loading from "./Loading";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts("notebook").then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="max-w-5xl m-auto pt-[120px] px-[20px] pb-[50px] grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
}

export default Products;
