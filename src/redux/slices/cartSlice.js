import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
        
        // console.log(state.items.includes({id: action.payload.id}))
        
            state.items.push(action.payload);
        
      
    },
    removeItem: (state, action) => {
        state.items.filter((obj) => obj.id !== action.payload)
    },
    clearItems: (state) => {
        state.items = []
    }
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;