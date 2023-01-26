import { StyledHeader } from "./style";
import Cart from "../../assets/Cart.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <div>
          <p>MKS</p>
          <p>Sistemas</p>
        </div>
        <button>
          <img src={Cart} alt="Cart" />
          <span>0</span>
        </button>
      </nav>
    </StyledHeader>
  );
};
