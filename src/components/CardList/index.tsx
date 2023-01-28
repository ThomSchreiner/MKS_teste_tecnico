import { useProductsContext } from "../../contexts/products";
import { Card } from "../Card";
import { StyledCardList } from "./style";

export const CardList = () => {
  const { products } = useProductsContext();

  if (!products) return null;

  return (
    <StyledCardList>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </StyledCardList>
  );
};
