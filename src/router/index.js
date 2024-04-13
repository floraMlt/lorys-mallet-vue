import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Project from '../views/projects/Project.vue'
import AllProject from '../views/projects/AllProjects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: AllProject
    },
    {
      path: '/projects/:id',
      name: 'Project',
      component: Project
    }
  ]
})

export default router
