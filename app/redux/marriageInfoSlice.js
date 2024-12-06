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
      state.guardianConsent = action.payload.guardianConsent;
      state.jobAfterMarriage = action.payload.jobAfterMarriage;
      state.workPreference = action.payload.workPreference;
      state.studyAfterMarriage = action.payload.studyAfterMarriage;
      state.acceptStudent = action.payload.acceptStudent;
      state.separateLiving = action.payload.separateLiving;
      state.thoughtsOnMarriage = action.payload.thoughtsOnMarriage;
      state.expectationsFromOppositeSide =
        action.payload.expectationsFromOppositeSide;
      state.reasonForMarriage = action.payload.reasonForMarriage;
      state.dowry = action.payload.dowry;
      state.pastRelationship = action.payload.pastRelationship;
    },
    resetMarriageInfo: () => initialState, // Optional: to reset the form
  },
});

// Export the action creators and reducer
export const { setMarriageInfo, resetMarriageInfo } = marriageInfoSlice.actions;
export default marriageInfoSlice.reducer;
