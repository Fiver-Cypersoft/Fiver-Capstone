import axios from "axios";
import { userLocalStorage } from "./localService";
import { setLoadingOff, setLoadingOn } from "../redux/slice/SpinnerSlice";
import { store } from "../redux/store";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjIxLzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMDk3OTIwMDAwMCIsIm5iZiI6MTY4NzE5NDAwMCwiZXhwIjoxNzExMTI2ODAwfQ.I9iDnvUJNQaG_RBPSODU3vvlNF0JJ7lRamr221wclIQ";

export const configHeaders = () => {
  return {
    TokenCybersoft: TOKEN_CYBER,
  };
};

export const BASE_URL = "https://fiverrnew.cybersoft.edu.vn/api";

// axios instance
export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
    Authorization: `${userLocalStorage.get()?.accessToken}`,
    timeout: 1000,
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    store.dispatch(setLoadingOn());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    store.dispatch(setLoadingOff());
    return response;
  },
  function (error) {
    store.dispatch(setLoadingOff());
    return Promise.reject(error);
  }
);
