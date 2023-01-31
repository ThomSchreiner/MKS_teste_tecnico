import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ShoppingCartMenu } from "../../components/ShoppingCartMenu";
import { StyledMain } from "./style";

export const Home = () => {
  return (
    <>
      <Header />
      <ShoppingCartMenu />
      <StyledMain>
        <div>
          <CardList />
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
