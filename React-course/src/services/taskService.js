import { AccordionSummary } from '@material-ui/core';
import axios from 'axios';

let serverUrl = 'http://localhost:3001';

export const getTasks = () => {
  return axios.get(`${serverUrl}/tasks`);
};

export const getTask = (task) => {
  return axios.get(`${serverUrl}/tasks/${task.id}`);
};

export const createTask = (task) => {
  return axios.post(`${serverUrl}/tasks`, task);
};

export const updateTask = (task) => {
  return axios.put(`${serverUrl}/tasks/${task.id}`, task);
};

export const deleteTask = (id) => {
  return axios.delete(`${serverUrl}/tasks/${id}`);
};
