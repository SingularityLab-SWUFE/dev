import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 自定义全局样式
import './assets/CSS/styles.css'
import BaiduCalendar from "vue-baidu-calendar"
import './assets/font/Liquid-Crystal/Liquid-Crystal/font.css'

const app = createApp(App)
// app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(BaiduCalendar)
app.mount('#app')

// 照搬
// router.beforeEach((to, from, next) => {
//     //路由发生改变时,触发
//     window.document.title = to.meta.title == undefined ? '默认标题' : to.meta.title
//     next();
// })
