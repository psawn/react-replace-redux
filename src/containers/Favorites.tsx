// import { useSelector } from "react-redux";
// import FavoriteItem from "../components/Favorites/FavoriteItem";
// import "./Products.css";

// const selectFavoritesState = (state) => state.favorites;

// const Favorites = (props) => {
//   const favoriteProducts = useSelector((state) =>
//     state.shop.products.filter((p) => p.isFavorite)
//   );
//   let content = <p className="placeholder">Got no favorites yet!</p>;
//   if (favoriteProducts.length > 0) {
//     content = (
//       <ul className="products-list">
//         {favoriteProducts.map((prod) => (
//           <FavoriteItem
//             key={prod.id}
//             id={prod.id}
//             title={prod.title}
//             description={prod.description}
//           />
//         ))}
//       </ul>
//     );
//   }
//   return content;
// };

// export default Favorites;
import { useSelector } from "react-redux";
import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";
import { createSelector } from "@reduxjs/toolkit";

const selectProductsState = (state) => state.shop.products;

const selectFavoriteProducts = createSelector(
  [selectProductsState],
  (products) => products.filter((p) => p.isFavorite)
);

const Favorites = (props) => {
  const favoriteProducts = useSelector(selectFavoriteProducts);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;