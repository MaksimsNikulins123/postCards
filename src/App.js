import { useState } from "react";
import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";
import Cart from "./pages/Cart";



function App() {
  // console.log("App render");

  const [searchValue, setSearchValue] = useState('')

  return (
    <Routes>
      <Route path="/" element={<MainLayout searchValue={searchValue} setSearchValue={setSearchValue}/>}>
        <Route index element={<Home searchValue={searchValue}/>} />
        <Route  path="cart" element={<Cart />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
