import { createRouter, createWebHistory } from 'vue-router'
import PatientCreate from '../views/PatientCreate.vue'
import PatientEdit from '../views/PatientEdit.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PatientList',
      component: () => import('../views/PatientListView.vue')
    },
    {
      path: '/patients/create',
      name: 'PatientCreate',
      component: PatientCreate
    },
    {
      path: '/patients/:id/edit',
      name: 'PatientEdit',
      component: PatientEdit, 
      props: true
    },
  ]
})

export default router
