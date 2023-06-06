import Vue from 'vue'
import Router from 'vue-router'
import ipam from './ipam'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ipam,
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('@/views/Login'),
            hidden: true
        },
        {
            path: '/*',
            redirect: '/login'
        }
    ]
})