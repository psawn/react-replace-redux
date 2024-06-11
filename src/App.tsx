import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" Component={ProductsPage} />
          <Route path="/favorites" Component={FavoritesPage} />
        </Routes>
      </main>
    </>
  );
}

export default App;
