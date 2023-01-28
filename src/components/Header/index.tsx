import { StyledHeader } from "./style";
import cart from "../../assets/cart.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <div>
          <p>MKS</p>
          <p>Sistemas</p>
        </div>
        <button>
          <img src={cart} alt="cart" />
          <span>0</span>
        </button>
      </nav>
    </StyledHeader>
  );
};
