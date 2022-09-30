import { createRouter, createWebHistory } from 'vue-router'
import jj from '../views/jj.vue'
import create from '../views/create-item.vue'
import completed from '../views/completed-list.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: jj,
    props: true
  },
  {
    path: '/create',
    name: 'create',
    component: create,
    props: true
  },
  {
    path: '/completed',
    name: 'completed',
    component: completed,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
