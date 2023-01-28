import { StyledCard } from "./style";
import { iCardProps } from "./type";
import shopping_bag from "../../assets/shopping_bag.svg";

export const Card = ({ product }: iCardProps) => {
  const { name, brand, photo, price, description } = product;

  const formatValue = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

  return (
    <StyledCard>
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div>
        <div>
          <h2>{name}</h2>
          <span>{formatValue(Number(price))}</span>
        </div>
        <p>Redesigned from scratch and completely revised.</p>
      </div>
      <button>
        <img src={shopping_bag} alt="shopping bag" />
        <p>COMPRAR</p>
      </button>
    </StyledCard>
  );
};
