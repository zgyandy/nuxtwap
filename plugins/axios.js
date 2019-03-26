export default function ({$axios, redirect}) {
  let axios = $axios
  // 基本配置
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 请求回调
  axios.onRequest(config => {
    // console.log(config)
    // console.log('Making request to ' + config.url)
  })
  // 返回回调
  axios.onResponse(res => {
    // console.log(res)
  })
  // 错误回调
  axios.onError(error => {
    throw error
    // redirect('/404')
  })
}