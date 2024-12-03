// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./slice"; // Import the reducer
import addressReducer from "./adressSlice";
import educationReducer from "./educationalSlice";
import familyReducer from "./familySlice";
import personalDataSlice from "./personalDataSlice";
import marriageInfo from "./marriageInfoSlice";
import expectedPatner from "./expectedPatnerSlice";
import ongicarnama from "./ongicarnamaSlice";
// import {} from "";
const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer, // Add the personalInfo reducer
    address: addressReducer,
    education: educationReducer, // Add the education reducer to the store
    family: familyReducer,
    personal: personalDataSlice,
    marriageInfo: marriageInfo,
    expectedPatner: expectedPatner,
    ongicarnam: ongicarnama,
  },
});

export default store;
