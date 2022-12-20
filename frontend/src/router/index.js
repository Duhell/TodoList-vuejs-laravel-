import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tasks',
      name: 'taskIndex',
      
      component: () => import('../views/tasks/taskIndex.vue')
    },
    {
      path: '/tasks/create',
      name: 'taskCreate',
      
      component: () => import('../views/tasks/taskCreate.vue')
    },
    {
      path: '/tasks/:id/edit',
      name: 'taskEdit',
      
      component: () => import('../views/tasks/taskEdit.vue'),
      props:true,
    }
  ]
})

export default router
