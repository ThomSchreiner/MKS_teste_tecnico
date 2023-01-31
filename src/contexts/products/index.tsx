import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { iProduct, iProductsContext, iProductsProviderProps, iProductsReturn } from "./types";

const ProductsContext = createContext<iProductsContext>({} as iProductsContext);

export const ProductsProvider = ({ children }: iProductsProviderProps) => {
  const [products, setProducts] = useState<iProduct[] | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get<iProductsReturn>("/products", {
        params: {
          page: 1,
          rows: 10,
          sortBy: "id",
          orderBy: "ASC",
        },
      });
      setProducts(data.products);
    };
    getProducts();
  }, []);

  const formatValueToBRL = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

  return (
    <ProductsContext.Provider value={{ products, formatValueToBRL }}>{children}</ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
