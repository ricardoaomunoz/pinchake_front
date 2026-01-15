// Imports
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/pages/home/Index.vue'),
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('@/pages/about/Index.vue'),
          meta: { src: import('@/assets/about.jpg') },
        },
        {
          path: '/tours',
          name: 'Tours',
          component: () => import('@/pages/tours/Index.vue'),
          meta: { src: import('@/assets/gallery.jpg') },
        },
        {
          path: '/contact-us',
          name: 'Contact',
          component: () => import('@/pages/contact-us/Index.vue'),
          meta: { src: import('@/assets/contact.jpg') },
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'FourOhFour',
          component: () => import('@/pages/404/Index.vue'),
        },
      ],
    },
    {
      path: '/admin',
      component: () => import('@/layouts/admin/Index.vue'),
      children: [
        {
          path: '',
          name: 'AdminDashboard',
          component: () => import('@/pages/admin/Dashboard.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'tours',
          name: 'AdminTours',
          component: () => import('@/pages/admin/Tours.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'reviews',
          name: 'AdminReviews',
          component: () => import('@/pages/admin/Reviews.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'subscribers',
          name: 'AdminSubscribers',
          component: () => import('@/pages/admin/Subscribers.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'users',
          name: 'AdminUsers',
          component: () => import('@/pages/admin/Users.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: () => import('@/pages/admin/Login.vue'),
    },

  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('pinchake_token')
    if (!token) {
      return next({ name: 'AdminLogin' })
    }
  }
  return next()
})

export default router
