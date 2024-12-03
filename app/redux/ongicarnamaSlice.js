// src/redux/ongicarNamaSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  familyConsent: "",
  addedToCommunity: "",
  legalActionWarning: "",
  dowryAmount: "",
};

// Create the slice
const ongicarNamaSlice = createSlice({
  name: "ongicarNama", // Slice name
  initialState, // Initial state
  reducers: {
    // Action to set the form data
    setOngicarnama: (state, action) => {
      // Overwrite the state with the form data
      state.familyConsent = action.payload.familyConsent;
      state.addedToCommunity = action.payload.addedToCommunity;
      state.legalActionWarning = action.payload.legalActionWarning;
      state.dowryAmount = action.payload.dowryAmount;
    },
    // Action to reset the form data
    resetFormData: (state) => {
      state.familyConsent = "";
      state.addedToCommunity = "";
      state.legalActionWarning = "";
      state.dowryAmount = "";
    },
  },
});

// Export actions
export const { setOngicarnama, resetFormData } = ongicarNamaSlice.actions;

// Export the reducer
export default ongicarNamaSlice.reducer;
