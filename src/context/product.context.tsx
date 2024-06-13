import { ReactNode, createContext, useState } from "react";
import { ProductItemType } from "../components/Products/ProductItem";

type ProductContextType = {
  products: ProductItemType[];
  toggleFavorite: (productId: string) => void;
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
  toggleFavorite: () => {},
});

export default function ProducContextProdiver(props: { children: ReactNode }) {
  const [productsList, setProductList] = useState([
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

  const toggleFavorite = (productId: string) => {
    setProductList((currentProductList) => {
      const prodIndex = currentProductList.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProductList[prodIndex].isFavorite;
      const updatedProducts = [...currentProductList];
      updatedProducts[prodIndex] = {
        ...currentProductList[prodIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };

  return (
    <ProductContext.Provider value={{ products: productsList, toggleFavorite }}>
      {props.children}
    </ProductContext.Provider>
  );
}
