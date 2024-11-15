// redux/slice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for personalInfo
const initialState = {
  personalInfo: {
    fullName: "",
    mobileNumber: "",
    skinColor: "",
    birthYear: null,
    nationality: "",
    maritalStatus: "",
    weight: null,
    height: null,
    bloodGroup: "",
    religion: "",
    belief: "",
    familyTitle: "",
    email: "",
    guardianNumber: "",
    maternalGrandfatherName: "",
    paternalGrandfatherName: "",
  },
};

// Create a slice for managing personalInfo
const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload; // Set the entire personalInfo object
    },
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload }; // Update specific fields
    },
  },
});

export const { setPersonalInfo, updatePersonalInfo } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
