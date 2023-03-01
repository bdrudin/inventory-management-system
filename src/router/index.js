import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'

import TambahBarangView from '@/views/barang/TambahBarangView.vue'
import UpdateBarangView from '@/views/barang/UpdateBarangView.vue'

import TambahSupplierView from '@/views/supplier/TambahSupplierView.vue'
import UpdateSupplierView from '@/views/supplier/UpdateSupplierView.vue'

import store from '@/store'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
      meta: {
        requiresNonAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: {
        requiresNonAuth: true
      }
    },

    // Barang 
    {
      path: '/barang/store',
      name: 'TambahBarang',
      component: TambahBarangView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/barang/edit/:id',
      name: 'UpdateBarang',
      component: UpdateBarangView,
      meta: {
        requiresAuth: true
      }
    },

    // Supplier
    {
      path: '/supplier/store',
      name: 'TambahSupplier',
      component: TambahSupplierView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/supplier/edit/:id',
      name: 'UpdateSupplier',
      component: UpdateSupplierView,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresNonAuth)) {
    if (store.getters.isAuthenticated) {
      next({
        name: 'Dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})



export default router
