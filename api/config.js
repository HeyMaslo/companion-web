import axios from 'axios';
import { envs } from './../config/envs';
import qs from 'qs';

const API = axios.create({
  headers: { Accept: 'application/json' },
});

API.interceptors.request.use((request) => {
  request.baseURL = envs.storyMaprURL;
  request.paramsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  };
  return request;
});

export default API;
