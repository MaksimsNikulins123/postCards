import { configureStore } from "@reduxjs/toolkit";
import filterByCategorySlice from "./slices/filterByCategorySlice";
import  sortByValueSlice  from "./slices/sortByValueSlice";
import  searchSlice  from "./slices/searchSlice";
import addItemToCartSlice from "./slices/addItemToCartSlice";


export const store = configureStore({
  reducer: {
    filterByCategory: filterByCategorySlice,
    sortByValue: sortByValueSlice,
    search: searchSlice,
    addItemToCart: addItemToCartSlice
  },
});
