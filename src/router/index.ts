import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../views/home/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
