//封装axios 请求，近回重新封闭的数据格式

//对错误的统一处理
import axios from 'axios'
import  errHandle from './errHandle'

const instance = axios.create()

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
    debugger
    errHandle(err)
    return Promise.reject(err)
  }
  
);

export default instance