import axios from 'axios';

export const getUsers = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`);
};

export const updateUser = (id, userData) => {
  return axios.put(`https://reqres.in/api/users/${id}`, userData);
};

export const deleteUser = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`);
};
