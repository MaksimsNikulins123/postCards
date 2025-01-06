import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pagesCount: 1,
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagesCount: (state, action) => {
      state.pagesCount = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPagesCount, setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;