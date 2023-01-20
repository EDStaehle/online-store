import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeCategory: ''
}

const activeCatSlice = createSlice({
  name: 'activeCat',
  initialState,
  reducers: {
    updateActive: (state, action) => {
      state.activeCategory = action.payload
    }
  }
})
export const { updateActive } = activeCatSlice.actions;
export default activeCatSlice.reducer