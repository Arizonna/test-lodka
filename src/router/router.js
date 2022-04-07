import { createRouter, createWebHistory } from 'vue-router'
import Users from "@/Users.vue"
import Main from "@/Main.vue"
import Mag from "@/Mag.vue"
import Login from "@/components/Login"


const routes = [
  {
    path: '/',
    name: 'mag',
    component: Mag
  },
  {
    path: '/userlist',
    name :'users',
    component: Users
  },
  {
    path : '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
