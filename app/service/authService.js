// import axiosInstance from '../api/axiosInstance';

import axiosInstance from "@/_api/axiosInstance";

export const register = async (data) => {
  const res = await axiosInstance.post('/users/register', data);
  return res.data;
};

export const login = async (data) => {
  const res = await axiosInstance.post('/users/login', data);
  localStorage.setItem('token', res.data.token);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};
