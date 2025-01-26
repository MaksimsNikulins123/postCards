import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
        console.log(action.payload)
      const findItemInCart = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );

      if (findItemInCart) {
        findItemInCart.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      // console.log(state.items.includes({id: action.payload.id}))

      state.totalPrice = state.totalPrice + action.payload.price;
      // console.log(action.payload.price)
    },
    removeItem: (state, action) => {
      state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
