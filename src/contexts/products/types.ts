import { ReactNode } from "react";

export interface iProductsProviderProps {
  children: ReactNode;
}

export interface iProductsContext {
  products: iProduct[] | null;
  formatValueToBRL: (value: number) => string;
}

export interface iProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface iProductsReturn {
  count: number;
  products: iProduct[] | [];
}
