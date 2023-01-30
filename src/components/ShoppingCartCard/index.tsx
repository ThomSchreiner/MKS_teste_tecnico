import { useProductsContext } from "../../contexts/products";
import { useShoopingCartContext } from "../../contexts/shoopingCart";
import { QuantityCounter } from "../QuantityCounter";
import { StyledShoppingCart } from "./style";
import { iShoopingCartCardProps } from "./types";

export const ShoppingCartCard = ({ product }: iShoopingCartCardProps) => {
  const { id, name, photo, price } = product;
  const { formatValueToBRL } = useProductsContext();
  const { removeProductOfCart } = useShoopingCartContext();

  return (
    <StyledShoppingCart>
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div>
        <h2>{name}</h2>
        <QuantityCounter product={product} />
        <span>{formatValueToBRL(Number(price))}</span>
      </div>
      <button onClick={() => removeProductOfCart(id)}>X</button>
    </StyledShoppingCart>
  );
};
