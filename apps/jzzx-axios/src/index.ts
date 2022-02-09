import AdnyRequest from './request'
const request = new AdnyRequest({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 3000,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('请求成功的拦截')
      // const token = localCache.getCache('token')
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (config) => {
      // console.log('响应成功的拦截')
      return config
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应失败的拦截')
      return err
    }
  }
})

export default request
