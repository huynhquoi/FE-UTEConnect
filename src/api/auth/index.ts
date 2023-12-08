import { callApi } from "@/axios/callApi";
import { API_AUTH_LOGIN, API_AUTH_REGISTER, POST_METHOD } from "../type";

type LoginType = {
  username: string;
  password: string;
};
export const loginApi = async (data: LoginType) => {
  const response = await callApi(API_AUTH_LOGIN, POST_METHOD, data);
  if (typeof window === "undefined") {
    return;
  } else {
    localStorage.setItem("access_token", response?.accesstoken);
  }
  return response;
};

type RegisterType = {
  username: string;
  password: string;
  fullname: string;
  email: string;
  gender: string;
};

export const registerApi = async (data: RegisterType) => {
  await callApi(API_AUTH_REGISTER, POST_METHOD, data);
};
