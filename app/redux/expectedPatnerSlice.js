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
      state[name] = value;
    },
    // resetFormData: () => initialState,  // Optional: to reset the form
  },
});

// Export the action creators and reducer
export const { setExpectedPatner } = expectedPatnerSlice.actions;
export default expectedPatnerSlice.reducer;
