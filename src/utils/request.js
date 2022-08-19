import axios from 'axios'
import { Message } from 'antd'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url

  baseURL: 'https://zora-liu.ngrok.io',

  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    return config
  },
  error => {
    // do something with request error
    Message.error(error.errError || 'Error')
    // Message({
    //   message: error.errError || 'Error',
    //   type: 'error',
    //   duration: 3 * 1000
    // });
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    console.log("res")
    console.log(res)
    // if the custom code is not 20000, it is judged as an error.


    // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //   // to re-login
    //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //     confirmButtonText: 'Re-Login',
    //     cancelButtonText: 'Cancel',
    //     type: 'warning'
    //   }).then(() => {
    //     store.dispatch('user/resetToken').then(() => {
    //       location.reload()
    //     })
    //   })
    // }

    // return res
    if (res.status === undefined) {
      return res
    } else if (res.status == 200) {
      return res
    } else {
      Message.error(res.errError || 'Error')
      // Message({
      //   message: res.error || 'Error',
      //   type: 'error',
      //   duration: 3 * 1000
      // })
      return Promise.reject(new Error(res.error || 'Error'))
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message.error(error.errError || 'Error')
    // Message({
    //   message: error,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
