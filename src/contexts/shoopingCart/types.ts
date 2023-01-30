import { Dispatch, ReactNode, SetStateAction } from "react";
import { iProduct } from "../products/types";

export interface iShoopingCartProviderProps {
  children: ReactNode;
}

export interface iShoopingCartContext {
  shoopingCartProducts: iShoopingCartProduct[];
  addProductToCart: (productId: number) => void;
  reduceProductOfCart: (productId: number) => void;
  removeProductOfCart: (productId: number) => void;
  isCartMenuOpen: boolean;
  setIsCartMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export interface iShoopingCartProduct extends iProduct {
  quantity: number;
}
