// redux/personalDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for personal data
const initialState = {
  voterOrBirthRegistrationNo: "",
  voterOrBirthRegistrationPhoto: "", // File name for the registration photo
  mobileNumber: "",
  currentPhoto: "", // File name for the current profile picture
  hobbies: "",
  religiousView: "",
  disabilityStatus: "",
  secondMarriageThoughts: "",
  financialSource: "",
  fatherVoterIdPhoto: "", // File name for the father's voter ID photo
};

// Create a slice for managing personal data
const personalDataSlice = createSlice({
  name: "personalData",
  initialState,
  reducers: {
    setPersonalData: (state, action) => {
      state.voterOrBirthRegistrationNo =
        action.payload.voterOrBirthRegistrationNo;
      state.voterOrBirthRegistrationPhoto =
        action.payload.voterOrBirthRegistrationPhoto;
      state.mobileNumber = action.payload.mobileNumber;
      state.currentPhoto = action.payload.currentPhoto;
      state.hobbies = action.payload.hobbies;
      state.religiousView = action.payload.religiousView;
      state.disabilityStatus = action.payload.disabilityStatus;
      state.secondMarriageThoughts = action.payload.secondMarriageThoughts;
      state.financialSource = action.payload.financialSource;
      state.fatherVoterIdPhoto = action.payload.fatherVoterIdPhoto;
    },
    updatePersonalData: (state, action) => {
      state.voterOrBirthRegistrationNo =
        action.payload.voterOrBirthRegistrationNo ||
        state.voterOrBirthRegistrationNo;
      state.voterOrBirthRegistrationPhoto =
        action.payload.voterOrBirthRegistrationPhoto ||
        state.voterOrBirthRegistrationPhoto;
      state.mobileNumber = action.payload.mobileNumber || state.mobileNumber;
      state.currentPhoto = action.payload.currentPhoto || state.currentPhoto;
      state.hobbies = action.payload.hobbies || state.hobbies;
      state.religiousView = action.payload.religiousView || state.religiousView;
      state.disabilityStatus =
        action.payload.disabilityStatus || state.disabilityStatus;
      state.secondMarriageThoughts =
        action.payload.secondMarriageThoughts || state.secondMarriageThoughts;
      state.financialSource =
        action.payload.financialSource || state.financialSource;
      state.fatherVoterIdPhoto =
        action.payload.fatherVoterIdPhoto || state.fatherVoterIdPhoto;
    },
  },
});

export const { setPersonalData, updatePersonalData } =
  personalDataSlice.actions;
export default personalDataSlice.reducer;
