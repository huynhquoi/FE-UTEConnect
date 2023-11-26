export const API = "https://quanlituyendung-be.vercel.app";

//auth
const API_AUTH = `${API}/api/auth`;
export const API_AUTH_LOGIN = `${API_AUTH}/login`;
export const API_AUTH_REGISTER = `${API_AUTH}/register`;
export const API_AUTH_LOGOUT = `${API_AUTH}/logout`;

//user
const API_USER = `${API}/api/user`;
export const API_GET_USER_PROFILE = `${API_USER}/profile`;
export const API_PUT_USER_PROFILE = `${API_USER}/profile`;
export const API_GET_LIST_USER = `${API_USER}/list`;

export const GET_METHOD = "GET";
export const POST_METHOD = "POST";
export const PUT_METHOD = "PUT";
export const DELETE_METHOD = "DELETE";

export type ApiResponse = {
  data: object;
};
