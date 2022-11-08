import { createSlice } from '@reduxjs/toolkit'
export const themeSlice = createSlice({
  name: 'theme',
  initialState: { isdark: false },
  reducers: {
    changeTheme: (state) => {
      state.isdark = !state.isdark
    },
  },
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
