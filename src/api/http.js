import axios from 'axios'
import {Message} from 'element-ui';
import {router} from '../router/devRouter'
import qs from 'qs'

const timeOut = 60 * 1000 // 默认请求超时时间

// 环境切换
/*if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://192.168.1.45:8080'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://192.168.1.53:9090'  //生产环境
}*/

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

let Base = '/HiQuality'

function headerUrl(url) {
  url = Base + url;
  return url
}

// request 请求拦截器
axios.interceptors.request.use(
  config => {
    //想写什么自己写
    return config
  },
  error => {
    return Promise.error(error)
  })

// response 响应拦截器
axios.interceptors.response.use(
  response => {
    console.log(response)
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 返回非200正常时
  error => {
    if (error.response.status) {
      //这个提示等等都很灵活  看你想怎么封装了
   /*   switch (error.response.status) {
        case 400:
          Message({
            showClose: true,
            message: '服务器错误，请联系管理员！',
            type: 'error'
          });
          break
      }*/
      return Promise.reject(error.response)
    }
  }
)

export default {
  /**
   * get方法对应get请求
   * @param {String}url 请求地址
   * @param {Object}params携带参数
   * @returns {Promise}
   */
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(headerUrl(url), {
        params: params
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  },
  /**
   * post方法对应post请求
   * @param {String} url 请求地址
   * @param {Object} params 携带参数
   * @returns {Promise}
   */
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(headerUrl(url), qs.stringify(params))
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  }
}
