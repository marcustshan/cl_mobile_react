import axios from 'axios'
import ActionCreator from '../store/actions';

const api = axios.create({
  baseURL: 'http://cl.byulsoft.com/api',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json;charset=utf-8'
  },
});

api.interceptors.request.use(request => {
  console.log(ActionCreator)
  ActionCreator.updateShowLoading(true);
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  ActionCreator.updateShowLoading(false);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

export default api;