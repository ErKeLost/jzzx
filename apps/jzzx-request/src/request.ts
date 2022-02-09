import axios from 'axios'

import type { AdnyRequestInterceptors, AdnyRequestConfig } from './type'

import type { AxiosInstance } from 'axios'

// import { ElLoading } from 'element-plus'
// import type { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEFAULT_LOADING = true

class AdnyRequest {
  instance: AxiosInstance
  interceptors?: AdnyRequestInterceptors
  // showLoading: boolean
  // loading?: ILoadingInstance
  constructor(config: AdnyRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // this.showLoading = config.showLoading ?? DEFAULT_LOADING

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例的请求成功拦截器')
        // if (this.showLoading) {
        //   this.loading = ElLoading.service({
        //     lock: true,
        //     text: '正在加载',
        //     background: 'rgba(0, 0, 0, .2)'
        //   })
        // }
        return config
      },
      (error) => {
        // console.log('所有实例的请求错误拦截')
        // switch 判断
        return error
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        // console.log('所有实例的请求成功拦截器')
        setTimeout(() => {
          // this.loading?.close()
        }, 1000)
        return config
      },
      (error) => {
        // console.log('所有实例的请求错误拦截')
        // switch 判断
        return error
      }
    )
  }
  request<T = any>(config: AdnyRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // if (config.showLoading === false) {
      //   this.showLoading = config.showLoading
      // }
      this.instance
        .request<any, any>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            // res = config.interceptors.responseInterceptor(res)
          }
          resolve(res.data)
          // this.showLoading = DEFAULT_LOADING
        })
        .catch((err) => {
          // this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: AdnyRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: AdnyRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T = any>(config: AdnyRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: AdnyRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default AdnyRequest
