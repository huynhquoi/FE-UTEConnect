import axios, { AxiosError } from "axios";

const ACCESS_TOKEN = localStorage.getItem("access_token");

export const callApi = async (endpoint: string, method: string, data?: any) => {
  const response = await axios({
    url: endpoint,
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    data: data,
  });

  return response.data;
};
