import { RoutesMain as Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/products";
import { ShoopingCartProvider } from "./contexts/shoopingCart";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ProductsProvider>
        <ShoopingCartProvider>
          <Routes />
        </ShoopingCartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}
