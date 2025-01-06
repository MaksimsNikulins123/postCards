import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxItemsPerPage: 4,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setMaxItemsPerPage: (state, action) => {
      state.maxItemsPerPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMaxItemsPerPage} = settingsSlice.actions;

export default settingsSlice.reducer;
