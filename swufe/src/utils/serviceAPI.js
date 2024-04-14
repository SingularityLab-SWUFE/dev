
//需要先导入axios
//get和post请求发给后端的数据的变量名需与后端需求的相同
import axios from 'axios';
const baseURL=''//接口地址头,待填充
const service = axios.create({
  baseURL: baseURL,
});

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求中添加 Token
    const token = localStorage.getItem('token');//需要在登录时获取后端返回的用户token并且通过localStorage.setItem('token'，获取后端返回的用户token);存入浏览器
    if (token) {s
      config.headers.Authorization = `Token ${token}`;//此处已经为登录后的请求均添加了token，如果登录时已经保存了token在浏览器上
    }
    return config;
  },
  error => {
    // 请求错误时的处理
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;

// 在vue文件的<script/>中引入
// import service from '@/utils/serviceAPI';
// 便可在
// export default {
//    data() {
//      return {
//        data: null,
//      }
//    },
//    methods: {
    
//    }
// }
// 中间定义方法
// 在方法中调用get请求

// service.get('接口地址尾', {
//     headers: {},传向后端
//     params: {},传向后端
// }).then(Response => {
//     this.data = Response.data;获取后端返回的数据
//     console.log(this.data);打印
// }).catch(() => {
//  错误
// });


// 在方法中调用post请求

// service.post('接口地址尾', data此处为后端需要接收的数据, {
//   headers: {}
// }).then(Response=>{
// }).catch(()=>{
//  错误
// });


// get/post 的另一种形式

// service({
//   url: '接口地址尾',
//   method: 'post或者get',
//   data: 后端需要接收的数据,
//   headers: {},
// }).then(Response => {
// }).catch(() => {
//   错误
// });