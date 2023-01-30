import { useProductsContext } from "../../contexts/products";
import { useShoopingCartContext } from "../../contexts/shoopingCart";
import { iShoopingCartProduct } from "../../contexts/shoopingCart/types";
import { ShoppingCartCard } from "../ShoppingCartCard";
import { StyledShoppingCart } from "./style";

export const ShoppingCartMenu = () => {
  const { formatValueToBRL } = useProductsContext();
  const { shoopingCartProducts, isCartMenuOpen, setIsCartMenuOpen } = useShoopingCartContext();

  const totalPrice = () => {
    return formatValueToBRL(
      shoopingCartProducts.reduce(
        (acc: number, act: iShoopingCartProduct) => acc + Number(act.price) * act.quantity,
        0
      )
    );
  };

  return (
    <StyledShoppingCart isCartMenuOpen={isCartMenuOpen}>
      <header>
        <h3>Carrinho de compras</h3>
        <button onClick={() => setIsCartMenuOpen(false)}>X</button>
      </header>
      <ul>
        {shoopingCartProducts.map((cartProduct) => (
          <ShoppingCartCard key={cartProduct.id} product={cartProduct} />
        ))}
      </ul>
      <footer>
        <div>
          <span>Total:</span>
          <span>{totalPrice()}</span>
        </div>
        <button>Finalizar Compra</button>
      </footer>
    </StyledShoppingCart>
  );
};
