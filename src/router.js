import { createRouter, createWebHashHistory } from 'vue-router'

import Login from './components/Login.vue'
import Home from './components/Home.vue'

const routes = [
    {
        path: '/', 
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home', 
        component: Home
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;