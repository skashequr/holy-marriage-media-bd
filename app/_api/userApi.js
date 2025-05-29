import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/users';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};
export const getUserProfile = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};
export const updateUserProfile = async (userId, userData) => {
  const response = await axios.put(`${API_URL}/${userId}`, userData);
  return response.data;
};
export const deleteUserProfile = async (userId) => {
  const response = await axios.delete(`${API_URL}/${userId}`);
  return response.data;
};
export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};
export const updateUserPassword = async (userId, passwordData) => {
  const response = await axios.put(`${API_URL}/${userId}/password`, passwordData);
  return response.data;
};
export const resetUserPassword = async (email) => {
  const response = await axios.post(`${API_URL}/reset-password`, { email });
  return response.data;
};
export const verifyUserEmail = async (token) => {
  const response = await axios.get(`${API_URL}/verify-email`, { params: { token } });
  return response.data;
};
export const changeUserRole = async (userId, roleData) => {
  const response = await axios.put(`${API_URL}/${userId}/role`, roleData);
  return response.data;
};
export const getUserByEmail = async (email) => {
  const response = await axios.get(`${API_URL}/by-email`, { params: { email } });
  return response.data;
};
export const getUserByUsername = async (username) => {
  const response = await axios.get(`${API_URL}/by-username`, { params: { username } });
  return response.data;
};
export const getUserByPhone = async (phone) => {
  const response = await axios.get(`${API_URL}/by-phone`, { params: { phone } });
  return response.data;
};
export const getUserById = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};
export const updateUserDetails = async (userId, userDetails) => {
  const response = await axios.put(`${API_URL}/${userId}/details`, userDetails);
  return response.data;
};
export const getUserActivityLog = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}/activity-log`);
  return response.data;
};
export const getUserPermissions = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}/permissions`);
  return response.data;
};
export const updateUserPermissions = async (userId, permissions) => {
  const response = await axios.put(`${API_URL}/${userId}/permissions`, permissions);
  return response.data;
};
export const getUserNotifications = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}/notifications`);
  return response.data;
};
export const markNotificationAsRead = async (userId, notificationId) => {
  const response = await axios.put(`${API_URL}/${userId}/notifications/${notificationId}/read`);
  return response.data;
};
export const deleteNotification = async (userId, notificationId) => {
  const response = await axios.delete(`${API_URL}/${userId}/notifications/${notificationId}`);
  return response.data;
};
export const getUserSettings = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}/settings`);
  return response.data;
};
export const updateUserSettings = async (userId, settings) => {
  const response = await axios.put(`${API_URL}/${userId}/settings`, settings);
  return response.data;
};
export const getUserFriends = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}/friends`);
  return response.data;
};
export const addUserFriend = async (userId, friendId) => {
  const response = await axios.post(`${API_URL}/${userId}/friends`, { friendId });
  return response.data;
};
export const removeUserFriend = async (userId, friendId) => {
  const response = await axios.delete(`${API_URL}/${userId}/friends/${friendId}`);
  return response.data;
};
export const getUserGroups = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}/groups`);
  return response.data;
};
export const createUserGroup = async (userId, groupData) => {
  const response = await axios.post(`${API_URL}/${userId}/groups`, groupData);
  return response.data;
};
export const updateUserGroup = async (userId, groupId, groupData) => {
  const response = await axios.put(`${API_URL}/${userId}/groups/${groupId}`, groupData);
  return response.data;
};
export const deleteUserGroup = async (userId, groupId) => {
  const response = await axios.delete(`${API_URL}/${userId}/groups/${groupId}`);
  return response.data;
};
