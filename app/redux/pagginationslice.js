// redux/familySlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for family data
const initialState = {};

// Create a slice for managing family data
const familySlice = createSlice({
  name: "family",
  initialState,
  reducers: {
    setFamily: (state, action) => {},
  },
});

export const { setFamily } = familySlice.actions;
export default familySlice.reducer;
