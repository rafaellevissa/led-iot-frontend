import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { t } from "i18next";
import storage from "redux-persist/lib/storage";
import { store } from "../store";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  try {
    const storage = store.getState();
    const auth = storage?.auth?.item;

    if (auth && config?.headers) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }

    return config;
  } catch (error) {
    return config;
  }
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const { getState }: any = store;
    const auth = getState().auth.item;

    if (error.response?.status === 401 && auth?.token) {
      alert(t('ERROR:EXPIRED_SESSION'));

      storage.removeItem('persist:@ledIOT');
      window.location.reload()
    }

    return Promise.reject(error);
  },
);

export default api;