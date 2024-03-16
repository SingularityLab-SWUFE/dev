
export default [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/layout/AppMain.vue'),
        children: [
            {
                path: '',
                name: 'home_page',
                component: () => import('@/views/home_page.vue'),
                meta: {
                    title: '首页',
                    keepAlive: true, // 需要被缓存
                }
            },
            {
                path: '/competition_center',
                name: 'competition_center',
                component: () => import('@/views/competition_center.vue'),
                meta: {
                    title: '题目列表',
                    keepAlive: true, // 需要被缓存
                }
            },
            {
                path: '/competition_details',
                name: 'competition_details',
                component: () => import('@/views/competition_details.vue'),
                meta: {
                    title: '题目详情',
                    keepAlive: true, // 需要被缓存
                }
            },
            {
                path: 'student_info',
                name: 'student_info',
                component: () => import('@/views/student_info.vue'),
                meta: {
                    title: '用户中心',
                    keepAlive: true, // 需要被缓存
                },

            },
        ]
    }
]
