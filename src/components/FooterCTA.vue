<template>
  <section class="bg-gradient-navy text-white section-padding">
    <div class="container-wrapper text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        Ready to book your service? Let's keep you rolling.
      </h2>
      
      <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
        Don't let RV issues stop your adventure. Our certified mobile technicians bring 
        professional service directly to your location across the United States.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          :href="`tel:${siteConfig.contact.phone}`"
          class="btn-primary text-lg px-8 py-4 shadow-lg"
        >
          Call {{ siteConfig.contact.phone }}
        </a>
        
        <button 
          @click="scrollToContact"
          class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-ww-navy font-semibold shadow-lg"
        >
          Request Service
        </button>
      </div>
      
      <div class="mt-12 pt-8 border-t border-white border-opacity-20">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
              <span class="text-xs font-bold">MOB</span>
            </div>
            <div class="text-sm opacity-80">Mobile Service</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
              <span class="text-xs font-bold">RVTI</span>
            </div>
            <div class="text-sm opacity-80">RVTI Certified</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
              <span class="text-xs font-bold">10+</span>
            </div>
            <div class="text-sm opacity-80">10+ Years Experience</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
              <span class="text-xs font-bold">USA</span>
            </div>
            <div class="text-sm opacity-80">Nationwide Coverage</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteConfig } from '@/config/site'

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
}
</script>
