import { createRouter, createWebHistory } from 'vue-router'
import PrincipalPage from '../views/PrincipalPage.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: PrincipalPage
    },
    {
        path: '/logon',
        name: 'logon',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/components/logonCliente.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router