//需要先导入axios
//get和post请求发给后端的数据的变量名需与后端需求的相同
import axios from 'axios';
// 请求时弹出的盒子
import { ElMessageBox } from 'element-plus';
import '../assets/CSS/MessageBox.css';


// 创建axios实例
// const baseURL=''//接口地址头,待填充
const service = axios.create({
  // baseURL: baseURL,
  timeout: 15000,
  // 默认请求头
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  // 跨域请求时是否需要使用凭证
  withCredentials: true,
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


// response拦截器
service.interceptors.response.use(
  response => {
      // code为非200时抛错
      const res = response.data
      // console.log(res)
      let sign = response.headers['x-cda-redirect-login-sign'];

      // 用户已经登录（由sign变量是否定义来判断）的情况下，重定向用户到一个新的URL。
      if (sign !== undefined) {
        let loginRedirectUrl = response.data.content;
        window.open(loginRedirectUrl, "_self" )
      } 
      else {
        // 我们自定义返回状态码和信息
        // if (res.code !== '200' && res.code !== 20000) {
        if (res.code !== '200') {
          console.log('res.code:' + res.code + ',res.msg:' + res.msg)
          // 出现500000时要刷新，自定义的错误码
          if(res.code == '500000'){
              ElMessageBox.alert(res.msg, '失败', {
                confirmButtonText: '确定',
                customClass: 'AlertBox',
                callback: action => {
                  if (action === 'confirm') {
                      // 在点击确认按钮后刷新页面
                      location.reload();
                  }
                }
              })
          } else {
            if(res.msg === undefined){
              ElMessageBox.alert('res.code:'+res.code, "未知错误", {
                confirmButtonText: '确定',
                customClass: 'AlertBox',
              });
            } else{
              ElMessageBox.alert(res.msg, "失败", {
                confirmButtonText: '确定',
                customClass: 'AlertBox',
              });
            }
          }
          // window.alert(res.msg)
            return Promise.reject('error')
        } else {
              return response.data
        }
      }
  },
  error => {
      if (error.response.status === 401) {
          window.location.href = error.response.headers.location
          return
      }
      return Promise.reject(error)
  }
)


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