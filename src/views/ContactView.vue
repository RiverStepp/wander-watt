<template>
  <div>
    <section class="bg-gradient-to-br from-ww-gray-50 to-ww-gray-100 section-padding">
      <div class="container-wrapper text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-ww-ink mb-6">
          Contact & Book Service
        </h1>
        <p class="text-xl text-ww-gray-700 max-w-3xl mx-auto mb-8">
          Ready to get your RV serviced? We're here to help with professional mobile service 
          across the United States. Get in touch today for a quote or to schedule your appointment.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            :href="`tel:${siteConfig.contact.phone}`"
            class="btn-primary text-lg px-8 py-4"
          >
            Call {{ siteConfig.contact.phone }}
          </a>
          <a 
            :href="`mailto:${siteConfig.contact.email}`"
            class="btn-outline text-lg px-8 py-4"
          >
            Email Us
          </a>
        </div>
        
        <p class="text-ww-gray-600">
          Or fill out the form below and we'll get back to you within 24 hours
        </p>
      </div>
    </section>
    
    <section class="section-padding">
      <div class="container-wrapper">
        <div class="grid lg:grid-cols-3 gap-12">
          <div class="lg:col-span-1 space-y-8">
            <div class="card">
              <h2 class="text-2xl font-semibold text-ww-cream mb-6">Get in Touch</h2>
              
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 bg-ww-gold rounded-full flex items-center justify-center mt-1">
                    <span class="text-xs font-bold text-white">PH</span>
                  </div>
                  <div>
                    <h3 class="font-medium text-ww-cream">Phone</h3>
                    <a 
                      :href="`tel:${siteConfig.contact.phone}`"
                      class="text-ww-gold hover:text-ww-navy transition-colors"
                    >
                      {{ siteConfig.contact.phone }}
                    </a>
                    <p class="text-sm text-ww-stone mt-1">Available 7 days a week</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 bg-ww-sage rounded-full flex items-center justify-center mt-1">
                    <span class="text-xs font-bold text-white">EM</span>
                  </div>
                  <div>
                    <h3 class="font-medium text-ww-cream">Email</h3>
                    <a 
                      :href="`mailto:${siteConfig.contact.email}`"
                      class="text-ww-gold hover:text-ww-navy transition-colors"
                    >
                      {{ siteConfig.contact.email }}
                    </a>
                    <p class="text-sm text-ww-stone mt-1">Response within 24 hours</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 bg-ww-sage rounded-full flex items-center justify-center mt-1">
                    <span class="text-xs font-bold text-white">US</span>
                  </div>
                  <div>
                    <h3 class="font-medium text-ww-cream">Service Area</h3>
                    <p class="text-ww-stone-light">{{ siteConfig.contact.serviceArea }}</p>
                    <p class="text-sm text-ww-stone mt-1">Mobile service nationwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card">
              <h3 class="text-xl font-semibold text-ww-cream mb-4">Business Hours</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-ww-stone">Monday - Friday</span>
                  <span class="text-ww-stone">8:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-ww-stone">Saturday</span>
                  <span class="text-ww-stone">9:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-ww-stone">Sunday</span>
                  <span class="text-ww-stone">Emergency Only</span>
                </div>
              </div>
              <p class="text-xs text-ww-gray-600 mt-4">
                * Emergency services available 24/7 with additional fees
              </p>
            </div>
            
            <div class="card">
              <h3 class="text-xl font-semibold text-ww-cream mb-4">Certifications</h3>
              <div class="space-y-2">
                <div 
                  v-for="cert in siteConfig.business.certifications"
                  :key="cert"
                  class="flex items-center space-x-2 text-sm"
                >
                  <span class="w-2 h-2 bg-ww-gold rounded-full flex-shrink-0"></span>
                  <span class="text-ww-stone">{{ cert }}</span>
                </div>
              </div>
            </div>
            
            <div class="card bg-red-50 border-red-200">
              <h3 class="text-xl font-semibold text-red-800 mb-4">Emergency Service</h3>
              <p class="text-sm text-red-700 mb-4">
                Experiencing a breakdown or urgent RV system failure? We offer emergency mobile service 
                to get you back on the road safely.
              </p>
              <a 
                :href="`tel:${siteConfig.contact.phone}`"
                class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center block"
              >
                Emergency Service
              </a>
              <p class="text-xs text-red-600 mt-2">
                Additional fees apply for emergency and after-hours service
              </p>
            </div>
          </div>
          
          <div class="lg:col-span-2">
            <div class="card">
              <h2 class="text-2xl font-semibold text-ww-cream mb-6">Request Service</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
  </div>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'
import { useHeadTags } from '@/composables/useHeadTags'
import { siteConfig } from '@/config/site'

useHeadTags({
  title: 'Contact & Book Mobile RV Service',
  description: 'Book mobile RV repair service. Available nationwide with certified technicians. Get a quote for solar, electrical, HVAC, roof work and more.',
  keywords: 'book RV service, mobile RV repair contact, RV technician quote, emergency RV service',
  image: '/og-contact.jpg'
})
</script>
