import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
}

export const filterByCategorySlice = createSlice({
  name: 'filterByCategory',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategoryId } = filterByCategorySlice.actions

export default filterByCategorySlice.reducer