import { createContext, useContext, useState } from "react";
import { useProductsContext } from "../products";
import { iShoopingCartContext, iShoopingCartProduct, iShoopingCartProviderProps } from "./types";

const ShoopingCartContext = createContext<iShoopingCartContext>({} as iShoopingCartContext);

export const ShoopingCartProvider = ({ children }: iShoopingCartProviderProps) => {
  const [shoopingCartProducts, setShoopingCartProducts] = useState<iShoopingCartProduct[]>([]);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const { products } = useProductsContext();

  const addProductToCart = (productId: number) => {
    const product = products?.find((prod) => prod.id === productId);
    if (!product) {
      console.error("Product not found");
      return;
    }

    setShoopingCartProducts((oldCartProducts) => {
      const prodIndex = oldCartProducts.findIndex((prod) => prod.id === product.id);
      return prodIndex === -1
        ? [...oldCartProducts, { ...product, quantity: 1 }]
        : oldCartProducts.map((prod) =>
            prod.id === product.id ? { ...prod, quantity: prod.quantity + 1 } : prod
          );
    });
  };

  const reduceProductOfCart = (productId: number) => {
    setShoopingCartProducts((oldCartProducts) =>
      oldCartProducts
        .map((prod) => (prod.id === productId ? { ...prod, quantity: prod.quantity - 1 } : prod))
        .filter((prod) => prod.quantity !== 0)
    );
  };

  const removeProductOfCart = (productId: number) => {
    setShoopingCartProducts((oldCartProducts) => oldCartProducts.filter((prod) => prod.id !== productId));
  };

  return (
    <ShoopingCartContext.Provider
      value={{
        shoopingCartProducts,
        addProductToCart,
        reduceProductOfCart,
        removeProductOfCart,
        isCartMenuOpen,
        setIsCartMenuOpen,
      }}
    >
      {children}
    </ShoopingCartContext.Provider>
  );
};

export const useShoopingCartContext = () => useContext(ShoopingCartContext);
