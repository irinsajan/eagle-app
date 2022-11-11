import { createRouter, createWebHistory } from 'vue-router'

import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Camera from './components/Camera.vue'

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
    {
        path: '/camera/:id',
        name: 'camera', 
        component: Camera,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;