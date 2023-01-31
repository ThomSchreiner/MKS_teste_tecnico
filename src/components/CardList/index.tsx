import { useProductsContext } from "../../contexts/products";
import { Card } from "../Card";
import { ShimmerCard } from "../ShimmerCard";
import { StyledCardList } from "./style";

export const CardList = () => {
  const { products } = useProductsContext();

  return (
    <StyledCardList>
      {products
        ? products.map((product) => <Card key={product.id} product={product} />)
        : [1, 2, 3, 4, 5, 6, 7, 8].map((number) => <ShimmerCard key={number} />)}
    </StyledCardList>
  );
};
