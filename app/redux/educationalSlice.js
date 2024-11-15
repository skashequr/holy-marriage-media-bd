// redux/slice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for education data
const initialState = {
  education_medium: "",
  highest_qualification: "",
  other_qualifications: [],
  ssc: {
    name: "",
    year: "",
    group: "",
  },
  hsc: {
    name: "",
    year: "",
    group: "",
  },
  university: {
    name: "",
    year: "",
    department: "",
  },
  othersExam: {
    first: "",
    second: "",
    third: "",
  },
};

// Create a slice for managing education data
const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setEducation: (state, action) => {
      state.education_medium = action.payload.education_medium;
      state.highest_qualification = action.payload.highest_qualification;
      state.other_qualifications = action.payload.other_qualifications;
      state.ssc = action.payload.ssc;
      state.hsc = action.payload.hsc;
      state.university = action.payload.university;
      state.othersExam = action.payload.othersExam;
    },
    updateEducation: (state, action) => {
      state.education_medium =
        action.payload.education_medium || state.education_medium;
      state.highest_qualification =
        action.payload.highest_qualification || state.highest_qualification;
      state.other_qualifications =
        action.payload.other_qualifications || state.other_qualifications;
      state.ssc = { ...state.ssc, ...action.payload.ssc };
      state.hsc = { ...state.hsc, ...action.payload.hsc };
      state.university = { ...state.university, ...action.payload.university };
      state.othersExam = { ...state.othersExam, ...action.payload.othersExam };
    },
  },
});

export const { setEducation, updateEducation } = educationSlice.actions;
export default educationSlice.reducer;
