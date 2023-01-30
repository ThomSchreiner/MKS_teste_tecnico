import { StyledCard } from "./style";
import { iCardProps } from "./type";
import shopping_bag from "../../assets/shopping_bag.svg";
import { useShoopingCartContext } from "../../contexts/shoopingCart";
import { useProductsContext } from "../../contexts/products";

export const Card = ({ product }: iCardProps) => {
  const { id, name, brand, photo, price, description } = product;
  const { formatValueToBRL } = useProductsContext();
  const { addProductToCart } = useShoopingCartContext();

  return (
    <StyledCard>
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div>
        <div>
          <h2>{name}</h2>
          <span>{formatValueToBRL(Number(price))}</span>
        </div>
        <p>Redesigned from scratch and completely revised.</p>
      </div>
      <button onClick={() => addProductToCart(id)}>
        <img src={shopping_bag} alt="shopping bag" />
        <p>COMPRAR</p>
      </button>
    </StyledCard>
  );
};
