//封装axios 请求，近回重新封闭的数据格式

//对错误的统一处理
import axios from 'axios'
import config from '@/config'
import  errHandle from './errHandle'

//封装一个类
class HttpRequest {
  constructor (baseUrl){
    this.baseUrl = baseUrl
  }
  //获取axios配置
  getInsideConfig () {
    const config = {
      baseURL : this.baseUrl,
       headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }
  //设定拦截器
  interceptors (instance) {

        // 清求拦截器
    instance.interceptors.request.use( (config) =>{
        console.log("config: "+ config)
        // Do something before the request is sent
        return config;
      },
      (err) => {
        errHandle(err)
        // Do something with the request error
        return Promise.reject(err);
      }
    );

    // 响应请求拦截器
    instance.interceptors.response.use(

        (res) => {
            console.log("res is : "+ res)

            if (res.status ===200){
                return Promise.resolve(res.data)
            }else {
                return Promise.reject(res)
            }
        },
      (err) =>{
        // debugger
        errHandle(err)
        return Promise.reject(err)
      }
      
    );
  }
  //创建实例
  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig, options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  //get
  get (url, config){
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return  this.request(options)
  }
  //post
  post(url, data) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}




export default HttpRequest