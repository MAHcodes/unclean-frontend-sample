import { AxiosRequestConfig, AxiosResponse } from "axios";
import { DependencyList, useEffect } from "react";
import { Api } from "../../configs/axios";

export type RequestInterceptorFn = (config: AxiosRequestConfig<any>) => void;
export type ResponseInterceptorFn = (config: AxiosResponse<any, any>) => void;

export const useRequestInterceptor = (
  fn: RequestInterceptorFn,
  deps: DependencyList = [],
) => {
  useEffect(() => {
    const Id = Api.interceptors.request.use((config) => {
      fn(config);

      return config;
    });

    return () => Api.interceptors.request.eject(Id);
  }, deps);
};

export const useResponseInterceptor = (
  fn: ResponseInterceptorFn,
  errorHandler?: any,
  deps: DependencyList = [],
) => {
  useEffect(() => {
    const Id = Api.interceptors.response.use(
      (config) => {
        fn(config);
        return config;
      },
      (error) => {
        errorHandler(error);
        return Promise.reject(error);
      },
    );

    return () => Api.interceptors.response.eject(Id);
  }, deps);
};
