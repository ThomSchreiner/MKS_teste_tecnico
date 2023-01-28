import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StyledMain } from "./style";

export const Home = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <CardList />
      </StyledMain>
      <Footer />
    </>
  );
};
