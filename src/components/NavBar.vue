<template>
  <nav 
    class="sticky top-0 z-50 bg-ww-surface shadow-lg border-b border-ww-gold"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="container-wrapper">
      <div class="flex items-center justify-between h-16 md:h-20">
        <RouterLink 
          to="/" 
          class="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-ww-gold rounded-lg p-1"
          aria-label="Wander Watt home page"
        >
          <LogoLockup class="h-8 md:h-10" />
        </RouterLink>
        
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ 'active': isActiveRoute(item.path) }"
          >
            {{ item.label }}
          </RouterLink>
        </div>
        
        <div class="hidden md:flex items-center space-x-4">
          <a 
            :href="`tel:${siteConfig.contact.phone}`"
            class="btn-outline text-sm"
          >
            Call Now
          </a>
          <button 
            @click="scrollToContact"
            class="btn-primary text-sm"
          >
            Book Service
          </button>
        </div>
        
        <button
          class="md:hidden p-2 rounded-lg hover:bg-ww-gray-100 focus:outline-none focus:ring-2 focus:ring-ww-gold transition-colors"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!isMobileMenuOpen" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      
      <div 
        v-show="isMobileMenuOpen"
        id="mobile-menu"
        class="md:hidden fixed inset-x-0 top-16 bottom-0 bg-ww-surface bg-opacity-98 backdrop-blur-md z-40 flex flex-col justify-center"
        :aria-hidden="!isMobileMenuOpen"
      >
        <div class="flex flex-col items-center justify-center space-y-8 px-6">
          <RouterLink
            v-for="(item, index) in navigationItems"
            :key="item.path"
            :to="item.path"
            class="text-ww-cream hover:text-ww-gold font-medium text-xl py-3 transition-all duration-300 focus:outline-none focus:text-ww-gold transform opacity-0 translate-y-4 mobile-menu-item"
            :class="{ 'text-ww-gold': isActiveRoute(item.path) }"
            :style="{ animationDelay: `${index * 100}ms` }"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </RouterLink>
          
          <div class="flex flex-col space-y-4 pt-8 w-full max-w-xs transform opacity-0 translate-y-4 mobile-menu-item" style="animation-delay: 500ms;">
            <a 
              :href="`tel:${siteConfig.contact.phone}`"
              class="btn-primary text-center text-lg py-4"
            >
              Call {{ siteConfig.contact.phone }}
            </a>
            <button 
              @click="scrollToContact"
              class="btn-outline text-lg py-4"
            >
              Request Service
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import LogoLockup from '@/components/LogoLockup.vue'
import { siteConfig } from '@/config/site'
import { useA11yFocus } from '@/composables/useA11yFocus'

const route = useRoute()
const { announce } = useA11yFocus()

const isMobileMenuOpen = ref(false)

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' }
]

const isActiveRoute = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  
  if (isMobileMenuOpen.value) {
    announce('Navigation menu opened')
  } else {
    announce('Navigation menu closed')
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  announce('Navigation menu closed')
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact-form')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const firstInput = contactSection.querySelector('input, textarea') as HTMLElement
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 500)
    }
  } else {
    window.location.href = '/contact'
  }
  closeMobileMenu()
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

const handleClickOutside = (e: Event) => {
  const nav = document.querySelector('nav')
  if (nav && !nav.contains(e.target as Node) && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
  document.removeEventListener('click', handleClickOutside)
})
</script>
