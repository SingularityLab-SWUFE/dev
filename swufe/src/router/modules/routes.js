export default [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/layout/AppMain.vue'),
        children: [
            {
                path: '',
                name: 'home_page',
                component: () => import('@/views/ojHome.vue'),
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
            }
        ]
    }
]
