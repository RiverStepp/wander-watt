import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Mobile RV Repair & Solar Services',
      description: 'RVTI-Certified Mobile RV Services across the United States. Solar, electrical, HVAC, roof repair and more. We bring the service bay to you.'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/ServicesView.vue'),
    meta: {
      title: 'RV Services & Repairs',
      description: 'Complete RV repair services: RVTI-certified inspections, RV Armor roofing, solar installation, electrical diagnostics, HVAC service, and more.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About John Stepp - RV Technician',
      description: 'Meet John Stepp, RVTI-certified technician with 10+ years experience in commercial electrical, HVAC, and RV systems. Mobile service across the US.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact & Book Service',
      description: 'Book mobile RV repair service. Available nationwide with certified technicians. Get a quote for solar, electrical, HVAC, roof work and more.'
    }
  },
  {
    path: '/legal/privacy',
    name: 'Privacy',
    component: () => import('@/views/legal/PrivacyView.vue'),
    meta: {
      title: 'Privacy Policy',
      description: 'Privacy policy for Wander Watt Mobile RV Services.',
      noIndex: true
    }
  },
  {
    path: '/legal/terms',
    name: 'Terms',
    component: () => import('@/views/legal/TermsView.vue'),
    meta: {
      title: 'Terms of Service',
      description: 'Terms of service for Wander Watt Mobile RV Services.',
      noIndex: true
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('@/views/FaqView.vue'),
    meta: {
      title: 'RV Maintenance Tips & Service Updates',
      description: 'Expert RV maintenance tips, service updates, and industry insights from certified RV technicians.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: 'Page Not Found',
      description: 'The page you are looking for could not be found.',
      noIndex: true
    }
  }
]

// TODO: This function has a bug. Caught on Firefox
const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
      top: 80
    }
  }

  if (savedPosition) {
    return savedPosition
  }

  return { top: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

router.beforeEach((_to, _from, next) => {
  next()
})

export default router
