// src/redux/marriageInfoSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the marriage information form
const initialState = {
  guardianConsent: "",
  jobAfterMarriage: "",
  workPreference: "",
  studyAfterMarriage: "",
  acceptStudent: "",
  livingArrangement: "",
  separateLiving: "",
  thoughtsOnMarriage: "",
  expectationsFromOppositeSide: "",
  reasonForMarriage: "",
  dowry: "",
  pastRelationship: "",
};

// Create the slice
const marriageInfoSlice = createSlice({
  name: "marriageInfo",
  initialState,
  reducers: {
    setMarriageInfo: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetMarriageInfo: () => initialState, // Optional: to reset the form
  },
});

// Export the action creators and reducer
export const { setMarriageInfo, resetMarriageInfo } = marriageInfoSlice.actions;
export default marriageInfoSlice.reducer;
