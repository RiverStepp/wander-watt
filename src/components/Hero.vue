<template>
  <section 
    class="relative bg-gradient-to-br from-ww-ink to-ww-surface section-padding overflow-hidden"
    aria-labelledby="hero-heading"
  >
    <div class="absolute inset-0 opacity-5">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="rv-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 0L20 20M20 0L0 20" stroke="currentColor" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#rv-pattern)"/>
      </svg>
    </div>
    
    <div class="container-wrapper relative">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-center lg:text-left animate-fade-in">
          <h1 
            id="hero-heading"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-ww-cream mb-6 leading-tight"
          >
            Mobile RV Repair, Solar & Roof Services
            <span class="text-ww-gold block">We Bring the Power to You</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-ww-stone mb-8 leading-relaxed">
            Certified RV Technician • RV Armor Roof Installer • 10+ Years in the Trades
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                      <button 
            @click="scrollToContact"
            class="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Book a Service
          </button>
          
          <a 
            :href="`tel:${siteConfig.contact.phone}`"
            class="btn-outline text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Call Now
          </a>
          </div>
          
          <StatsBadges />
        </div>
        
        <div class="flex justify-center lg:justify-end animate-slide-up">
          <div class="relative">
            <div class="bg-gradient-to-br from-ww-gray-800 to-ww-surface rounded-2xl shadow-2xl p-8 md:p-12 border border-ww-gold">
              <LogoLockup :show-text="true" size="lg" />
            </div>
            
            <div class="absolute -top-4 -right-4 bg-gradient-to-r from-ww-gold to-ww-gold-light text-ww-ink px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-bounce">
              RVTI Certified
            </div>
            <div class="absolute -bottom-4 -left-4 bg-gradient-to-r from-ww-gold to-ww-gold-light text-ww-ink px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-bounce" style="animation-delay: 0.5s;">
              10+ Years Experience
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 pt-12 border-t border-ww-gray-200">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-semibold text-ww-stone mb-4">Trusted Certifications & Partners</h2>
        </div>
        
        <div class="flex flex-wrap justify-center items-center gap-8 opacity-80">
          <div class="flex items-center space-x-2 bg-ww-gray-800 px-6 py-3 rounded-lg shadow border border-ww-gold">
            <div class="w-3 h-3 bg-ww-gold rounded"></div>
            <span class="font-medium text-ww-cream">RVTI</span>
          </div>
          <div class="flex items-center space-x-2 bg-ww-gray-800 px-6 py-3 rounded-lg shadow border border-ww-gold">
            <div class="w-3 h-3 bg-ww-gold rounded"></div>
            <span class="font-medium text-ww-cream">RV Armor</span>
          </div>
          <div class="flex items-center space-x-2 bg-ww-gray-800 px-6 py-3 rounded-lg shadow border border-ww-gold">
            <div class="w-3 h-3 bg-ww-gold rounded"></div>
            <span class="font-medium text-ww-cream">EPA Licensed</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LogoLockup from '@/components/LogoLockup.vue'
import StatsBadges from '@/components/StatsBadges.vue'
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
