import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";
import Cart from "./pages/Cart";


export const SearchContext = React.createContext();
export const ItemAddedCountContext = React.createContext();

function App() {
  console.log("App render");

  const [searchValue, setSearchValue] = useState("");
  const [itemAddedCount, setItemAddedCount] = useState(0);

  const filter = useSelector((state) => state.filter.count)
  const dispatch = useDispatch()

  return (
    <SearchContext.Provider value={{searchValue, setSearchValue}}>
    <ItemAddedCountContext.Provider value={{itemAddedCount, setItemAddedCount}}>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ItemAddedCountContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
