import { callApi } from "@/axios/callApi";
import { API_AUTH_LOGIN, POST_METHOD } from "../type";

type LoginType = {
  email: string;
  password: string;
};
export const loginApi = async (data: LoginType) => {
  const response = await callApi(API_AUTH_LOGIN, POST_METHOD, data);
  localStorage.setItem("access_token", response?.data?.access_token);
};
