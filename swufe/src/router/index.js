import { createRouter, createWebHistory } from "vue-router";
import problem_set from "@/views/problem_set.vue";
import Home from "@/views/home_page.vue";
import student_info from "@/views/student_info.vue";

const routes = [
  { path: '/', redirect: '/App.vue' },
  { path: '/home_page', component: Home },
  { path: '/problem_set', component: problem_set },
  { path: '/student_info', component: student_info,
    redirect:'/student_info/info_home',
    children :[
      {
        path: 'info_home',
        name: 'info_home',
        component: () => import('@/components/student_info_components/sub_components/InfoMainHome.vue'),

      },{
        path: 'info_notice',
        name: 'info_notice',
        component: () => import('@/components/student_info_components/sub_components/InfoNotice.vue'),

      },{
        path: 'info_competition',
        name: 'info_competition',
        component: () => import('@/components/student_info_components/sub_components/InfoCompetition.vue'),

      },{
        path: 'info_discussion',
        name: 'info_discussion',
        component: () => import('@/components/student_info_components/sub_components/InfoDiscussion.vue'),

      },{
        path: 'info_focus',
        name: 'info_focus',
        component: () => import('@/components/student_info_components/sub_components/InfoFocus.vue'),

      },{
        path: 'info_collection',
        name: 'info_collection',
        component: () => import('@/components/student_info_components/sub_components/InfoCollection.vue'),

      },

    ]},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
