import { useContext } from "react";
import Card from "../UI/Card";
import { ProductContext } from "../../context/product.context";
import "./ProductItem.css";

export type ProductItemType = {
  id: string;
  isFavorite: boolean;
  description: string;
  title: string;
};

const ProductItem = (props: ProductItemType) => {
  const toggleFavorite = useContext(ProductContext).toggleFavorite;

  const toggleFavHandler = () => {
    toggleFavorite(props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFavorite ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFavorite ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFavorite ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
