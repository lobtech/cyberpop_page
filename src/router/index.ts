import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../views/home/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        }
    },
    {
        name: 'privacy',
        path: '/privacy',
        component: () => import('../views/privacy/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'terms',
        path: '/terms',
        component: () => import('../views/terms/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'mining',
        path: '/mining',
        component: () => import('../views/mining/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'mystery',
        path: '/mystery',
        component: () => import('../views/mystery/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'cyberspace',
        path: '/cyberspace',
        component: () => import('../views/cyberspace/index.vue'),
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
