import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

export const fetchUsers = async (params) => {
  const response = await axios.get(`${BASE_URL}/${userBiodata}`, { params });
  return response.data;
};

export const updateStatus = async (userId, status) => {
  const response = await axios.patch(`${BASE_URL}/${userBiodata}/${userId}/status`, { status });
  return response.data;
};
