import qs from 'qs';
export default function ({$axios, redirect}) {
  let axios = $axios
  // 基本配置
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 请求回调
  axios.onRequest(config => {
    if (config.data) {
      config.data = qs.stringify(config.data, {
        allowDots: true //Option allowDots can be used to enable dot notation
      })
    }
    return config.data
  })
  // 返回回调
  axios.onResponse(res => {
    if (res.data.code == 200) {
      return res.data.data
    } else {
      return res
    }
  })
  // 错误回调
  axios.onError(error => {
    throw error
    // redirect('/404')
  })
}