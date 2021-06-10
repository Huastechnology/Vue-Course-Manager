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
    },
    {
        path:'/dashboard',
        name:'Dashboard',
        component: ()=> import('../pages/Profile.vue')
    },
    {
        path: '/students',
        name: 'Student',
        component: () => import('../pages/Student.vue')
    },
    {
        path: '/teachers',
        name: 'Teacher',
        component: () => import('../pages/Teacher.vue')
    },
    {
        path: '/courses',
        name: 'Course',
        component: () => import('../pages/Course.vue')
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: () => import('../pages/Schedule.vue')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router