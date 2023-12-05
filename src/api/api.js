import { BASE_URL, https } from "./config";
import { userLocalStorage } from "./localService";

export const authSevr = {
  signin: (info) => https.post(`${BASE_URL}/auth/signin`, info),
  signup: (info) => https.post(`${BASE_URL}/auth/signup`, info),
};

export const loaiCVSevr = {
  getLoaiCV: () => https.get(`${BASE_URL}/loai-cong-viec`),
  getJobTypeDetail: (id) =>
    https.get(`${BASE_URL}/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`),
  getJobByCateId: (id) =>
    https.get(`${BASE_URL}/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`),
  getJobDetailById: (id) =>
    https.get(`${BASE_URL}/cong-viec/lay-cong-viec-chi-tiet/${id}`),
  getCommentByJob: (id) =>
    https.get(`${BASE_URL}/binh-luan/lay-binh-luan-theo-cong-viec/${id}`),
};

export const congViecServ = {
  getMenuLoaiCV: () =>
    https.get(`${BASE_URL}/cong-viec/lay-menu-loai-cong-viec`),
};
//profile
export const profileUser = {
  getInfo: () =>
    https.get(`${BASE_URL}/users/${userLocalStorage.get()?.user.id}`),
  getCongViecDaThue: () =>
    https.get(`${BASE_URL}/thue-cong-viec/lay-danh-sach-da-thue`),
  deleteCongViecDaThue: (id) =>
    https.delete(`${BASE_URL}/thue-cong-viec/${id}`),
};
