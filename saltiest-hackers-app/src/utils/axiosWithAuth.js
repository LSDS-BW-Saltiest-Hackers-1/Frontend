import axios from 'axios';

export const axiosWithAuth = token => {
  // const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: 'http://saltyapp.herokuapp.com'
  });
};
