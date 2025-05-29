"use client";

import { useDispatch } from "react-redux";
import { loadFromStorage } from "./userSlice";
import { useEffect } from "react";
const ReduxInitializer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFromStorage());
  }, [dispatch]);
  return null;
};
export default ReduxInitializer;