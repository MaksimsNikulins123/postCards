import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortBy: '',
}

export const sortByValueSlice = createSlice({
  name: 'sortByValue',
  initialState,
  reducers: {
    setSortByValue: (state, action) => {
      state.sortBy = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSortByValue } = sortByValueSlice.actions

export default sortByValueSlice.reducer