import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  categories: ['All', 'Retro', 'Social', 'Modern', 'Comics', 'New'],
  categoryId: 0,
  sortList: [],
  sortByValue: "",
  searchValue:"",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortList: (state, action) => {
      state.sortList = action.payload;
    },
    setSortByValue: (state, action) => {
      state.sortByValue = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
  },
});


export const { setIsLoading, setCategoryId, setSortList, setSortByValue, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
