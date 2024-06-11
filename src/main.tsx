import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import productReducer from "./store/reducers/products";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const rootReducer = combineReducers({
  shop: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,
  </React.StrictMode>
);
