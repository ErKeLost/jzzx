import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface AdnyRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  // responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface AdnyRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: AdnyRequestInterceptors<T>
  showLoading?: boolean
}
