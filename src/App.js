import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";
import Cart from "./pages/Cart";


function App() {
  // console.log("App render");

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route  path="cart" element={<Cart />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
