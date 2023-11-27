export const API = "https://forum-be-1fdw.onrender.com";
export const GRAPHQL_API = "https://forum-be-1fdw.onrender.com/graphql";

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
