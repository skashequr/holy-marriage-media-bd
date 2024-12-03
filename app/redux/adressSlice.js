// redux/slice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for address
const initialState = {
  currentAddress: {
    area: "", // Division
    city: "", // District
    state: "", // Upazila
    village: "", // Union
    postCode: "", // Postal Code
  },
  permanentAddress: {
    area: "", // Division
    city: "", // District
    state: "", // Upazila
    postCode: "", // Postal Code
  },
};

// Create a slice for managing address
const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    // Set the entire address object for current and permanent address
    setAddress: (state, action) => {
      const { currentAddress, permanentAddress } = action.payload;
      state.currentAddress = currentAddress || state.currentAddress;
      state.permanentAddress = permanentAddress || state.permanentAddress;
    },
    // Update specific fields of currentAddress or permanentAddress
    updateCurrentAddress: (state, action) => {
      state.currentAddress = { ...state.currentAddress, ...action.payload };
    },
    updatePermanentAddress: (state, action) => {
      state.permanentAddress = { ...state.permanentAddress, ...action.payload };
    },
  },
});

export const { setAddress, updateCurrentAddress, updatePermanentAddress } =
  addressSlice.actions;
export default addressSlice.reducer;
