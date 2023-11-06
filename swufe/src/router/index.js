import {createRouter, createWebHistory} from 'vue-router'
import Routes from './modules/routes'


// 创建 vueRouter 实例
const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
})

// 页面跳转时到顶部
// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0); // 将滚动位置设置为页面顶部
//   next();
// });

export default router