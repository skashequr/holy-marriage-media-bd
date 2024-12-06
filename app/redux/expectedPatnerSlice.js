// src/redux/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the form data
const initialState = {
  ageRange: "",
  skinTone: "",
  height: "",
  education: "",
  district: "",
  expectedQualities: "",
  maritalStatus: "",
  profession: "",
  religiosity: "",
  familyEconomicStatus: "",
};

// Create the slice
const expectedPatnerSlice = createSlice({
  name: "expectedPatner",
  initialState,
  reducers: {
    setExpectedPatner: (state, action) => {
      const { name, value } = action.payload;
      // state[name] = value;
      state.ageRange = action.payload.ageRange;
      state.skinTone = action.payload.skinTone;
      state.height = action.payload.height;
      state.education = action.payload.education;
      state.district = action.payload.district;
      state.expectedQualities = action.payload.expectedQualities;
      state.maritalStatus = action.payload.maritalStatus;
      state.profession = action.payload.profession;
      state.religiosity = action.payload.religiosity;
      state.familyEconomicStatus = action.payload.familyEconomicStatus;
    },
    // resetFormData: () => initialState,  // Optional: to reset the form
  },
});

// Export the action creators and reducer
export const { setExpectedPatner } = expectedPatnerSlice.actions;
export default expectedPatnerSlice.reducer;
