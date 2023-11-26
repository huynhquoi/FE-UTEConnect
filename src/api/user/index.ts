import { callApi } from "@/axios/callApi";
import { API_GET_USER_PROFILE, GET_METHOD } from "../type";

export const profileUserApi = async () => {
  return await callApi(API_GET_USER_PROFILE, GET_METHOD);
};
