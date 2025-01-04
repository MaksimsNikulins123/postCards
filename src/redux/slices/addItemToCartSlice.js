import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const addItemToCartSlice = createSlice({
  name: 'addItemToCartSlice',
  initialState,
  reducers: {
    setAddedItemsToCartCount: (state, action) => {
      state.count = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAddedItemsToCartCount } = addItemToCartSlice.actions

export default addItemToCartSlice.reducer