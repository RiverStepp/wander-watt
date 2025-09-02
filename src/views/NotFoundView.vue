<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-ww-gray-50 to-ww-gray-100">
    <div class="container-wrapper">
      <div class="max-w-2xl mx-auto text-center">
        <div class="mb-8">
          <div class="mb-4">
            <FontAwesomeIcon :icon="faVanShuttle" class="text-9xl text-ww-gray-500" />
          </div>
          <div class="text-6xl font-bold text-ww-gold mb-2">404</div>
          <div class="text-2xl text-ww-gray-600">Looks like this route got lost!</div>
        </div>
        
        <div class="mb-8">
          <h1 class="text-3xl md:text-4xl font-bold text-ww-ink mb-4">
            Page Not Found
          </h1>
          <p class="text-lg text-ww-gray-700 mb-6">
            The page you're looking for doesn't exist or may have been moved. 
            Don't worry, let's get you back on the road!
          </p>
        </div>
        
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-xl font-semibold text-ww-ink mb-6">Quick Links</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <RouterLink 
              to="/"
              class="flex items-center space-x-3 p-4 rounded-lg border border-ww-gray-200 hover:border-ww-gold hover:bg-ww-gold hover:bg-opacity-10 transition-colors group"
            >
              <FontAwesomeIcon :icon="faHouse" class="text-2xl text-ww-ink" />
              <div class="text-left">
                <div class="font-medium text-ww-ink">Home</div>
                <div class="text-sm text-ww-gray-600">Back to homepage</div>
              </div>
            </RouterLink>
            
            <RouterLink 
              to="/services"
              class="flex items-center space-x-3 p-4 rounded-lg border border-ww-gray-200 hover:border-ww-gold hover:bg-ww-gold hover:bg-opacity-10 transition-colors group"
            >
              <FontAwesomeIcon :icon="faScrewdriverWrench" class="text-2xl text-ww-ink" />
              <div class="text-left">
                <div class="font-medium text-ww-ink group-hover:text-ww-ink">Services</div>
                <div class="text-sm text-ww-gray-600">View our RV services</div>
              </div>
            </RouterLink>
            
            <RouterLink 
              to="/about"
              class="flex items-center space-x-3 p-4 rounded-lg border border-ww-gray-200 hover:border-ww-gold hover:bg-ww-gold hover:bg-opacity-10 transition-colors group"
            >
              <FontAwesomeIcon :icon="faUsers" class="text-2xl text-ww-ink" />
              <div class="text-left">
                <div class="font-medium text-ww-ink">About</div>
                <div class="text-sm text-ww-gray-600">Meet our team</div>
              </div>
            </RouterLink>
            
            <RouterLink 
              to="/contact"
              class="flex items-center space-x-3 p-4 rounded-lg border border-ww-gray-200 hover:border-ww-gold hover:bg-ww-gold hover:bg-opacity-10 transition-colors group"
            >
              <FontAwesomeIcon :icon="faPhone" class="text-2xl text-ww-ink" />
              <div class="text-left">
                <div class="font-medium text-ww-ink">Contact</div>
                <div class="text-sm text-ww-gray-600">Get in touch</div>
              </div>
            </RouterLink>
          </div>
        </div>
        
        <div class="space-y-4">
          <p class="text-ww-gray-600 mb-6">
            Need immediate assistance with your RV?
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              :href="`tel:${siteConfig.contact.phone}`"
              class="btn-primary text-lg px-8 py-4"
            >
              <FontAwesomeIcon :icon="faPhone" class="mr-2" />
              Call {{ siteConfig.contact.phone }}
            </a>
            <RouterLink 
              to="/contact"
              class="btn-outline text-lg px-8 py-4"
            >
              <FontAwesomeIcon :icon="faClipboardList" class="mr-2" />
              Request Service
            </RouterLink>
          </div>
        </div>
        
        <div class="mt-12 p-6 bg-ww-gray-100 rounded-lg">
          <h3 class="font-semibold text-ww-ink mb-3">Looking for something specific?</h3>
          <p class="text-sm text-ww-gray-700 mb-4">
            Try checking our main pages or give us a call. We're here to help!
          </p>
          
          <div class="flex flex-wrap gap-2 justify-center">
            <RouterLink 
              to="/services#rvti-services"
              class="text-xs bg-white text-ww-gray-700 px-3 py-1 rounded-full hover:bg-ww-gold hover:text-ww-ink transition-colors"
            >
              RVTI Inspection
            </RouterLink>
            <RouterLink 
              to="/services#roof-services"
              class="text-xs bg-white text-ww-gray-700 px-3 py-1 rounded-full hover:bg-ww-gold hover:text-ww-ink transition-colors"
            >
              RV Armor Roof
            </RouterLink>
            <RouterLink 
              to="/services#solar-services"
              class="text-xs bg-white text-ww-gray-700 px-3 py-1 rounded-full hover:bg-ww-gold hover:text-ww-ink transition-colors"
            >
              Solar Installation
            </RouterLink>
            <RouterLink 
              to="/services#electrical-services"
              class="text-xs bg-white text-ww-gray-700 px-3 py-1 rounded-full hover:bg-ww-gold hover:text-ww-ink transition-colors"
            >
              Electrical Repair
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeadTags } from '@/composables/useHeadTags'
import { siteConfig } from '@/config/site'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faVanShuttle,
  faHouse,
  faScrewdriverWrench,
  faUsers,
  faPhone,
  faClipboardList
} from '@fortawesome/free-solid-svg-icons'

useHeadTags({
  title: 'Page Not Found - 404 Error',
  description: 'The page you are looking for could not be found. Return to Wander Watt Mobile RV Services homepage or contact us for assistance.',
  noIndex: true
})
</script>
