import { configureStore } from "@reduxjs/toolkit";

import  searchSlice  from "./slices/searchSlice";
import addItemToCartSlice from "./slices/addItemToCartSlice";
import  filterSlice  from "./slices/filterSlice";
import settingsSlice from "./slices/settingsSlice";
import paginationSlice from "./slices/paginationSlice";
import contentSlice  from "./slices/contentSlice";


export const store = configureStore({
  reducer: {
    settings: settingsSlice,
    filter: filterSlice,
    content: contentSlice,
    search: searchSlice,
    addItemToCart: addItemToCartSlice,
    pagination: paginationSlice
  },
});
