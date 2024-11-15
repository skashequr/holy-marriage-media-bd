// redux/familySlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for family data
const initialState = {
  fatherName: "",
  fatherAlive: "",
  fatherProfession: "",
  motherName: "",
  motherAlive: "",
  motherProfession: "",
  brothersCount: 0,
  sistersCount: 0,
  siblingsDetails: "",
  economicStatus: "",
  familyStatus: "",
  religiousEnvironment: "",
  relativesInfo: {
    maternalUncles: "",
    paternalUncles: "",
    guardianPhone: "",
    guardianRelation: "",
  },
};

// Create a slice for managing family data
const familySlice = createSlice({
  name: "family",
  initialState,
  reducers: {
    setFamily: (state, action) => {
      state.fatherName = action.payload.fatherName;
      state.fatherAlive = action.payload.fatherAlive;
      state.fatherProfession = action.payload.fatherProfession;
      state.motherName = action.payload.motherName;
      state.motherAlive = action.payload.motherAlive;
      state.motherProfession = action.payload.motherProfession;
      state.brothersCount = action.payload.brothersCount;
      state.sistersCount = action.payload.sistersCount;
      state.siblingsDetails = action.payload.siblingsDetails;
      state.economicStatus = action.payload.economicStatus;
      state.familyStatus = action.payload.familyStatus;
      state.religiousEnvironment = action.payload.religiousEnvironment;
      state.relativesInfo = action.payload.relativesInfo;
    },
    updateFamily: (state, action) => {
      state.fatherName = action.payload.fatherName || state.fatherName;
      state.fatherAlive = action.payload.fatherAlive || state.fatherAlive;
      state.fatherProfession =
        action.payload.fatherProfession || state.fatherProfession;
      state.motherName = action.payload.motherName || state.motherName;
      state.motherAlive = action.payload.motherAlive || state.motherAlive;
      state.motherProfession =
        action.payload.motherProfession || state.motherProfession;
      state.brothersCount = action.payload.brothersCount || state.brothersCount;
      state.sistersCount = action.payload.sistersCount || state.sistersCount;
      state.siblingsDetails =
        action.payload.siblingsDetails || state.siblingsDetails;
      state.economicStatus =
        action.payload.economicStatus || state.economicStatus;
      state.familyStatus = action.payload.familyStatus || state.familyStatus;
      state.religiousEnvironment =
        action.payload.religiousEnvironment || state.religiousEnvironment;
      state.relativesInfo = {
        ...state.relativesInfo,
        ...action.payload.relativesInfo,
      };
    },
  },
});

export const { setFamily, updateFamily } = familySlice.actions;
export default familySlice.reducer;
