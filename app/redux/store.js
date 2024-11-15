// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./slice"; // Import the reducer
import addressReducer from "./adressSlice";
import educationReducer from "./educationalSlice";
const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer, // Add the personalInfo reducer
    address: addressReducer,
    education: educationReducer, // Add the education reducer to the store
  },
});

export default store;
