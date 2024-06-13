import ProductItem from "../components/Products/ProductItem";
import { ProductContext } from '../context/product.context';
import "./Products.css";
import { useContext } from "react";

const Products = () => {
  const productList = useContext(ProductContext).products;

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFavorite={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
