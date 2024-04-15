/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "counter",
  initialState: {
    booksOfTheWeek: [],
  },
  reducers: {
    setBooksOfTheWeek: (state, action) => {
      state.booksOfTheWeek = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBooksOfTheWeek } = booksSlice.actions;

export default booksSlice.reducer;
