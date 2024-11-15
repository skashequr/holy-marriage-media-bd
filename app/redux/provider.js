"use client";
import { Provider as ReduxProvider } from "react-redux"; // Rename the imported Provider
import store from "./store";

export const AppProvider = ({ children }) => {
  // Rename the component to AppProvider
  return <ReduxProvider store={store}>{children}</ReduxProvider>; // Pass children here
};
