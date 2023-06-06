import axios, { AxiosError, AxiosPromise, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const request = axios.create({
  baseURL: '',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  responseType: 'json',
  validateStatus: (status) => status >= 200 && status < 300,
});

const requestSuccessHandler = (config: InternalAxiosRequestConfig) => {
  return config;
};

const requestErrorHandler = (err: AxiosError) => {
  return Promise.reject(err);
};

const responseSuccessHandler = (res: AxiosResponse) => {
  return Promise.resolve(res);
};

const responseErrorHandler = (err: AxiosError) => {
  return Promise.reject(err);
};

request.interceptors.request.use(
  (config) => requestSuccessHandler(config),
  (err) => requestErrorHandler(err),
);

request.interceptors.response.use(
  (res) => responseSuccessHandler(res),
  (err) => responseErrorHandler(err),
);

export const getResults = async <T>(requestFunc: AxiosPromise<T>): Promise<T> => {
  try {
    const { data } = await requestFunc;
    return data;
  } catch (err) {
    const error = err as AxiosError;
    if (process.env.NODE_ENV !== 'production') {
      console.error(error);
    }
    throw err;
  }
};

export default request;
