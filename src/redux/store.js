import { configureStore } from "@reduxjs/toolkit";

import  filterSlice  from "./slices/filterSlice";
import settingsSlice from "./slices/settingsSlice";
import paginationSlice from "./slices/paginationSlice";
import contentSlice  from "./slices/contentSlice";
import  cartSlice  from "./slices/cartSlice";


export const store = configureStore({
  reducer: {
    settings: settingsSlice,
    filter: filterSlice,
    content: contentSlice,
    pagination: paginationSlice,
    cart: cartSlice
  },
});
