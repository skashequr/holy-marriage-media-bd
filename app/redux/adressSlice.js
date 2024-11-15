// redux/slice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for address
const initialState = {
  address: {
    currentAddress: "",
    division: "",
    district: "",
    upazila: "",
    union: "",
    postalCode: "",
    permanentAddress: "",
  },
};

// Create a slice for managing address
const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload; // Set the entire address object
    },
    updateAddress: (state, action) => {
      state.address = { ...state.address, ...action.payload }; // Update specific fields
    },
  },
});

export const { setAddress, updateAddress } = addressSlice.actions;
export default addressSlice.reducer;
