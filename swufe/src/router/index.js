import { createRouter, createWebHistory } from "vue-router";
import Problems from "@/views/ojProblems.vue";
import Home from "@/views/ojHome.vue";

const routes = [
  { path: '/', redirect: '/App.vue' },
  { path: '/ojHome', component: Home },
  { path: '/ojProblems', component: Problems },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
