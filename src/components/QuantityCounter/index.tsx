import { useShoopingCartContext } from "../../contexts/shoopingCart";
import { StyledQuantityCounter } from "./style";
import { iQuantityCounterProps } from "./types";

export const QuantityCounter = ({ product }: iQuantityCounterProps) => {
  const { addProductToCart, reduceProductOfCart } = useShoopingCartContext();

  return (
    <StyledQuantityCounter>
      <small>Qtd:</small>
      <div>
        <button onClick={() => reduceProductOfCart(product.id)}>-</button>
        <p>{product.quantity}</p>
        <button onClick={() => addProductToCart(product.id)}>+</button>
      </div>
    </StyledQuantityCounter>
  );
};
