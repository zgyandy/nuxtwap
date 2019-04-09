import axios from 'axios'
let options = {}
options.baseURL = "http://m.zhizuobiao.com/api/"
// 请求回调
// axios.onRequest(config => {
//   if (config.data) {
//     config.data = qs.stringify(config.data, {
//       allowDots: true //Option allowDots can be used to enable dot notation
//     })
//   }
//   return config.data
// })
export default axios.create(options)