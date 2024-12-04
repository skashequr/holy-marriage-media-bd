// redux/slice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for personalInfo
const initialState = {
  personalInfo: {
    name: "",
    mobile: "",
    skinTone: "",
    birthYear: "",
    nationality: "",
    maritalStatus: "",
    weight: "",
    height: "",
    bloodGroup: "",
    religion: "",
    bleive: "",
    familyTitle: "",
    bioDataType: "",
    email: "",
    guirdeainNumber: "",
    maternalGrandfatherName: "",
    paternalGrandfatherName: "",
    // track the current step
  },
  currentPage2: 1,
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
    setCurrentPage2: (state, action) => {
      state.currentPage2 = { ...action.currentPage2, ...action.payload };
    },
  },
});

export const { setPersonalInfo, updatePersonalInfo, setCurrentPage2 } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
