import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.totalCount++;
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
      state.totalPrice = state.totalPrice + action.payload.price;
    },
    countPlus: (state, action) => {
      const findItemInCart = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );
      if (findItemInCart) {
        findItemInCart.count++;
        state.totalCount++;
        state.totalPrice = state.totalPrice + action.payload.price;
      }
    },
    countMinus: (state, action) => {
      // console.log(action.payload)
      const findItemInCart = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );
      if (findItemInCart) {
        findItemInCart.count--;
        state.totalCount--;
        state.totalPrice = state.totalPrice - action.payload.price;
      }
    },
    removeItem: (state, action) => {
      const findItemInCart = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );
      if (findItemInCart) {
        state.totalPrice =
          state.totalPrice - findItemInCart.price * findItemInCart.count;
        state.totalCount = state.totalCount - findItemInCart.count;
        state.items = state.items.filter(
          (obj) => JSON.stringify(obj) !== JSON.stringify(action.payload)
        );
      }

      //   }
    },
    clearItems: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, countPlus, countMinus, removeItem, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
