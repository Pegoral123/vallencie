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
    },
    {
        path: '/usuario_add',
        name: 'usuario_add',
        component: () =>
            import ('@/components/usuarioCadastro.vue') // "=>" equivale a uma "function(){}"

    },

    {
        path: '/usuario_listar',
        name: 'usuario_listar',
        component: () =>
            import ('@/components/usuarioListar.vue') // "=>" equivale a uma "function(){}"

    },

    {
        path: '/usuario_carrinho',
        name: 'usuario_carrinho',
        component: () =>
            import ('@/components/usuarioCarrinho.vue') // "=>" equivale a uma "function(){}"

    },

    {
        path: '/pruduto_perso',
        name: 'produto_perso',
        component: () =>
            import ('@/components/produtoPerso.vue') // "=>" equivale a uma "function(){}"

    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router