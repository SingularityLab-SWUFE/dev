import { createRouter, createWebHistory } from "vue-router";
import problem_set from "@/views/problem_set.vue";
import Home from "@/views/home_page.vue";
import student_info from "@/views/student_info.vue";

const routes = [
  { path: '/', redirect: '/App.vue' },
  { path: '/home_page', component: Home },
  { path: '/problem_set', component: problem_set },
  { path: '/student_info', component: student_info}
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
