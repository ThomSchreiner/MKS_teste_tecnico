import { StyledHeader } from "./style";
import cart from "../../assets/cart.svg";
import { useShoopingCartContext } from "../../contexts/shoopingCart";
import { iShoopingCartProduct } from "../../contexts/shoopingCart/types";

export const Header = () => {
  const { setIsCartMenuOpen, shoopingCartProducts } = useShoopingCartContext();

  const totalQuantityOfProducts = () =>
    shoopingCartProducts.reduce((acc: number, act: iShoopingCartProduct) => acc + act.quantity, 0);

  return (
    <StyledHeader>
      <nav>
        <div>
          <p>MKS</p>
          <p>Sistemas</p>
        </div>
        <button onClick={() => setIsCartMenuOpen(true)}>
          <img src={cart} alt="cart" />
          <span>{totalQuantityOfProducts()}</span>
        </button>
      </nav>
    </StyledHeader>
  );
};
