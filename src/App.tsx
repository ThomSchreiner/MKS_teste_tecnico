import { RoutesMain as Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/products";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ProductsProvider>
        <Routes />
      </ProductsProvider>
    </BrowserRouter>
  );
}
