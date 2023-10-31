import axios from "axios";
import { userLocalStorage } from "./localService";
import { setLoadingOff, setLoadingOn } from "../redux/SpinnerSlice";
import { store } from "..";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjAzLzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMjEwMjQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEyMjUwMDAwfQ.YeDhc_oSixV2XtFPDzcpxFhBos5832JpQpndHNoqZLk";

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
    Authorization: "bearer " + userLocalStorage.get()?.accessToken,
  },
});

// interceptor

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    console.log("api req send");
    store.dispatch(setLoadingOn());
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // dispatch
    store.dispatch(setLoadingOff());
    console.log("API response receive");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    store.dispatch(setLoadingOff());

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
