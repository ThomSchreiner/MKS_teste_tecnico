import { Header } from "../../components/Header";
import { useProductsContext } from "../../contexts/products";

export const Home = () => {
  const { products } = useProductsContext();
  if (!products) return null;

  return (
    <main>
      {/* {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))} */}

      <Header />
    </main>
  );
};
