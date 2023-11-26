import { AxiosError, AxiosResponse } from "axios";
import { error } from "console";

type BaseRequest<T, V> = (params?: T) => Promise<AxiosResponse<V>>;

type SuccessResponse<V> = {
  code: "success";
  data: V;
};

type ErrorResponse<E = AxiosError> = {
  code: "error";
  error: E;
};

type BaseResponse<V, E> = SuccessResponse<V> | ErrorResponse<E>;

export const requestHandler =
  <T, V, E = AxiosError>(request: BaseRequest<T, V>) =>
  async (params?: T): Promise<BaseResponse<V, E>> => {
    try {
      const response = await request(params);
      return { code: "success", data: response.data };
    } catch {
      return { code: "error", error: error as E };
    }
  };
