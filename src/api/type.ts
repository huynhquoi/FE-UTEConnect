export const API = "https://7241-42-114-102-242.ngrok-free.app";

//auth
export const API_AUTH_LOGIN = `${API}/login`;
export const API_AUTH_REGISTER = `${API}/register`;
export const API_AUTH_LOGOUT = `${API}/logout`;

export const GET_METHOD = "GET";
export const POST_METHOD = "POST";
export const PUT_METHOD = "PUT";
export const DELETE_METHOD = "DELETE";

export type ApiResponse = {
  data: object;
};
