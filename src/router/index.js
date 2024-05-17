import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Blog from '../views/Blog.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import BlogPost from '../components/BlogPost.vue'
import Reservation from '../views/Reservation.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/blog/:id',
    name: 'blogpost',
    component: BlogPost
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router