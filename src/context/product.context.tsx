import { ReactNode, createContext, useState } from "react";
import { ProductItemType } from "../components/Products/ProductItem";

type ProductContextType = {
  products: ProductItemType[];
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
});

export default function ProducContextProdiver(props: { children: ReactNode }) {
  const [productsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  return (
    <ProductContext.Provider value={{ products: productsList }}>
      {props.children}
    </ProductContext.Provider>
  );
}
