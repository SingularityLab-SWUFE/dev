import { createRouter, createWebHistory } from "vue-router";
import problem_set from "@/views/problem_set.vue";
import Home from "@/views/home_page.vue";

const routes = [
  { path: '/', redirect: '/App.vue' },
  { path: '/home_page', component: Home },
  { path: '/problem_set', component: problem_set },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
