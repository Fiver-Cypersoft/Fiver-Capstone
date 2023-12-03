import { BASE_URL, https } from "./config";
import { userLocalStorage } from "./localService";

export const authSevr = {
  signin: (info) => https.post(`${BASE_URL}/auth/signin`, info),
  signup: (info) => https.post(`${BASE_URL}/auth/signup`, info),
};

export const loaiCVSevr = {
  getLoaiCV: () => https.get(`${BASE_URL}/loai-cong-viec`),
};

export const congViecServ = {
  getMenuLoaiCV: () => https.get(`${BASE_URL}/cong-viec/lay-menu-loai-cong-viec`),
};

//profile
export const profileUser = {
  getInfo: () => https.get(`${BASE_URL}/users/${userLocalStorage.get()?.user.id}`),
  getCongViecDaThue: () => https.get(`${BASE_URL}/thue-cong-viec/lay-danh-sach-da-thue`),
  deleteCongViecDaThue: (id) => https.delete(`${BASE_URL}/thue-cong-viec/${id}`),
  uploadAvatar: (avatar) => https.post(`${BASE_URL}/users/upload-avatar`, avatar),
};
