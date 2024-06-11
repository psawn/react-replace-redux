import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import { toggleFav } from "../../store/actions/products";
import "./ProductItem.css";

export type ProductItemType = {
  id: string;
  isFavorite: boolean;
  description: string;
  title: string;
};

const ProductItem = (props: ProductItemType) => {
  const dispatch = useDispatch();

  const toggleFavHandler = () => {
    dispatch(toggleFav(props.id));
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
