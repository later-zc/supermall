import axios from 'axios'

export default function request (config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // axios的拦截器
  instance.interceptors.request.use(config => {
    console.log(config);
    // 1.比如config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时，页面中显示一个请求的图标
    // 3.某些网络请求(比如登录), 必须携带一些特殊的信息
    return config
  }, err => {
    console.log(err);
    return Promise.reject(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res
  }, err => {
    console.log(err);
    return Promise.reject(err)
  })

  // 发送请求
  return instance(config)
}

// 方式4
// const request = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// export default request