import { BASE_URL, https } from "./config";

export const authSevr = {
  signin: (info) => https.post(`${BASE_URL}/auth/signin`, info),
  signup: (info) => https.post(`${BASE_URL}/auth/signup`, info),
};

export const loaiCVSevr = {
  getLoaiCV: () => https.get(`${BASE_URL}/loai-cong-viec`),
};

export const congViecServ = {
  getMenuLoaiCV: () =>
    https.get(`${BASE_URL}/cong-viec/lay-menu-loai-cong-viec`),
};
