import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    
    {
        path:'/',
        name:'Home',
        component: ()=> import('../pages/Home.vue')
    },
    {
        path:'/about',
        name:'About',
        component: () => import('../pages/About.vue')
    }, 
    {
        path:'/signUp',
        name:'SignUp',
        component: ()=> import('../pages/SignUp.vue')
    },
    {
        path:'/login',
        name:'LogIn',
        component: ()=> import('../pages/LogIn.vue') 
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router