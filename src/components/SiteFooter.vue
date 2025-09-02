<template>
  <footer class="bg-ww-surface text-ww-cream border-t border-ww-gold" role="contentinfo">
    <div class="container-wrapper py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <LogoLockup :show-text="true" variant="light" class="mb-6" />
          <p class="text-ww-stone mb-6 leading-relaxed">
            {{ siteConfig.description }}
          </p>
          
          <div class="space-y-2 text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-ww-gold">Phone:</span>
              <a 
                :href="`tel:${siteConfig.contact.phone}`" 
                class="hover:text-ww-gold transition-colors"
              >
                {{ siteConfig.contact.phone }}
              </a>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-ww-gold">Email:</span>
              <a 
                :href="`mailto:${siteConfig.contact.email}`" 
                class="hover:text-ww-gold transition-colors"
              >
                {{ siteConfig.contact.email }}
              </a>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-ww-gold">Service Area:</span>
              <span>{{ siteConfig.contact.serviceArea }}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4 text-ww-gold">Quick Links</h3>
          <nav aria-label="Footer navigation">
            <ul class="space-y-2 text-sm">
              <li>
                <RouterLink to="/" class="text-ww-stone hover:text-ww-gold transition-colors">
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/services" class="text-ww-stone hover:text-ww-gold transition-colors">
                  Services
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/about" class="text-ww-stone hover:text-ww-gold transition-colors">
                  About
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" class="text-ww-stone hover:text-ww-gold transition-colors">
                  Contact
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/blog" class="text-ww-stone hover:text-ww-gold transition-colors">
                  Blog
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4 text-ww-gold">Services</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <RouterLink to="/services#rvti-services" class="text-ww-stone hover:text-ww-gold transition-colors">
                RVTI Certified Inspection
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/services#roof-services" class="text-ww-stone hover:text-ww-gold transition-colors">
                RV Armor Roofing
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/services#solar-services" class="text-ww-stone hover:text-ww-gold transition-colors">
                Solar & Battery
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/services#electrical-services" class="text-ww-stone hover:text-ww-gold transition-colors">
                Electrical Repair
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/services#hvac-services" class="text-ww-stone hover:text-ww-gold transition-colors">
                HVAC Service
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-ww-gray-700">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex space-x-4 mb-4 md:mb-0">
            <a 
              v-for="(url, platform) in siteConfig.social"
              :key="platform"
              :href="url"
              :aria-label="`Follow us on ${platform}`"
              class="w-8 h-8 bg-ww-gray-700 hover:bg-ww-gold text-white hover:text-ww-ink rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ getSocialIcon(platform) }}
            </a>
          </div>
          
          <div class="text-sm text-ww-stone">
            © {{ currentYear }} {{ siteConfig.name }}. All rights reserved.
          </div>
        </div>
      </div>
      
      <div class="mt-4 pt-4 border-t border-ww-gray-800">
        <div class="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-ww-stone">
          <RouterLink to="/legal/privacy" class="hover:text-ww-gold transition-colors">
            Privacy Policy
          </RouterLink>
          <RouterLink to="/legal/terms" class="hover:text-ww-gold transition-colors">
            Terms of Service
          </RouterLink>
          <span>Licensed & Insured</span>
          <span>RVTI Certified</span>
        </div>
      </div>
      
      <div class="mt-4 pt-4 border-t border-ww-gold border-opacity-30">
        <div class="text-center text-xs text-ww-stone">
          Website developed by 
          <a 
            href="https://www.linkedin.com/in/riverstepp/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-ww-gold hover:text-ww-gold-light transition-colors font-medium"
          >
            River Stepp
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LogoLockup from '@/components/LogoLockup.vue'
import { siteConfig } from '@/config/site'

const currentYear = computed(() => new Date().getFullYear())

// TODO: Add the real icons
const getSocialIcon = (platform: string) => {
  const icons: Record<string, string> = {
    facebook: 'FB',
    instagram: 'IG',
    youtube: 'YT',
    linkedin: 'LI'
  }
  return icons[platform] || 'WEB'
}
</script>
