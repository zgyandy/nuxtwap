import promise from 'es6-promise';
import axios from "axios";
import qs from 'qs'
promise.polyfill()
var baseUrl = '/'
// // 环境判断
if (process.env.NODE_ENV === 'development') {
 baseUrl = 'http://m.testiotek.com/api/'
} else {
  baseUrl = 'http://m.zhizuobiao.com/api/'
}
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 8000,
  headers: {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json; charset=UTF-8'
	}
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(config.type == 'formData' || config.method != 'post'){
      return config
    }
    config.data = qs.stringify(config.data)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // if (response.status == 200) {
      return response.data;
    // }
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  
export function post(url,params) {
	return instance({
		url,
		method: "post",
		params,
		headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		}
  })
}

export function get(url,params) {
	return instance({
		url,
		method: "get",
		params
	})
}
function params(data){
  let url='';
  for(let k in data){
      let val = data[k]!==undefined?data[k]:''
      url+=`&${k}=${encodeURIComponent(val)}`
  }
return url?url.substring(1):''
}