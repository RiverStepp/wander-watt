<template>
  <div>
    <section class="bg-gradient-to-br from-ww-gray-50 to-ww-gray-100 section-padding">
      <div class="container-wrapper text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-ww-ink mb-6">
          Professional RV Services
        </h1>
        <p class="text-xl text-ww-gray-700 max-w-3xl mx-auto mb-8">
          Comprehensive mobile RV repair and maintenance services by RVTI-certified technicians. 
          From emergency repairs to planned upgrades, we bring professional service to your location.
        </p>
        <button 
          @click="scrollToContact"
          class="btn-primary text-lg px-8 py-4"
        >
          Request Service Quote
        </button>
      </div>
    </section>
    
    <div class="container-wrapper py-12">
      <div class="grid lg:grid-cols-4 gap-8">
        <div class="lg:col-span-3 space-y-16">
          <section id="rvti-services" aria-labelledby="rvti-heading">
            <div class="card shadow border border-ww-gold">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-16 h-16 shadow border border-ww-gold bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl text-ww-gold border-ww-gold">
                    <FontAwesomeIcon :icon="faGraduationCap" />
                  </span>
                </div>
                <div>
                  <h2 id="rvti-heading" class="text-3xl font-bold text-ww-cream mb-3">
                    RVTI-Certified Technician & Inspector Services
                  </h2>
                  <p class="text-lg text-ww-stone">
                    Professional RV inspection and certification services following Recreation Vehicle Industry Association standards.
                  </p>
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Inspection Services</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Pre-purchase inspections
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Annual safety inspections
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Insurance inspections
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Warranty work documentation
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Technical Services</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      System diagnostics
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Safety system checks
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Component testing
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Maintenance recommendations
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="flex items-center flex-col space-x-2 px-6 py-3 rounded-lg shadow border border-ww-gold">
                <h4 class="font-semibold text-ww-cream mb-2">Why RVTI Certification Matters</h4>
                <p class="text-ww-stone">
                  RVTI (Recreation Vehicle Industry Association) certification ensures your technician has undergone 
                  rigorous training in RV systems, safety protocols, and industry best practices. This certification 
                  is recognized by manufacturers, insurance companies, and RV dealers nationwide.
                </p>
              </div>
            </div>
          </section>
          
          <section id="roof-services" aria-labelledby="roof-heading">
            <div class="card shadow border border-ww-gold">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-16 h-16 shadow border border-ww-gold bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl text-ww-gold border-ww-gold">
                    <FontAwesomeIcon :icon="faShieldHalved" />                
                  </span>
                </div>
                <div>
                  <h2 id="roof-heading" class="text-3xl font-bold text-ww-cream mb-3">
                    RV Armor Roof Installation & Maintenance
                  </h2>
                  <p class="text-lg text-ww-stone">
                    Premium roofing solutions with RV Armor certified installation, backed by manufacturer warranty.
                  </p>
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Installation Services</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Complete roof replacement
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      RV Armor membrane installation
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Proper substrate preparation
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Professional edge sealing
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Maintenance & Repair</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Leak detection and repair
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Preventive maintenance
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Warranty service
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Annual inspections
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="flex items-center flex-col space-x-2 px-6 py-3 rounded-lg shadow border border-ww-gold">
                <h4 class="font-semibold text-ww-cream mb-2">RV Armor Advantage</h4>
                <p class="text-ww-stone">
                  RV Armor is a premium roofing system designed specifically for RVs. Unlike traditional roofing materials, 
                  RV Armor provides superior protection against UV damage, extreme temperatures, and weather while maintaining 
                  flexibility during travel. Our certified installation ensures your warranty remains valid.
                </p>
              </div>
            </div>
          </section>
          
          <section id="solar-services" aria-labelledby="solar-heading">
            <div class="card shadow border border-ww-gold">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-16 h-16 shadow border border-ww-gold bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl text-ww-gold border-ww-gold">
                    <FontAwesomeIcon :icon="faSolarPanel" />
                  </span>
                </div>
                <div>
                  <h2 id="solar-heading" class="text-3xl font-bold text-ww-cream mb-3">
                    Solar & Battery Upgrades
                  </h2>
                  <p class="text-lg text-ww-stone">
                    Professional solar system design and installation for reliable off-grid power and energy independence.
                  </p>
                </div>
              </div>
              
              <div class="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Solar Installation</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      System design & sizing
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Panel mounting
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Wiring & connections
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Safety testing
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Battery Systems</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Lithium upgrades
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      AGM installations
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Battery monitoring
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Capacity optimization
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Power Management</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Inverter systems
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Charge controllers
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Energy monitoring
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Load analysis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section id="electrical-services" aria-labelledby="electrical-heading">
            <div class="card shadow border border-ww-gold">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-16 h-16 shadow border border-ww-gold bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl text-ww-gold border-ww-gold">
                    <FontAwesomeIcon :icon="faPlugCircleBolt" />
                  </span>
                </div>
                <div>
                  <h2 id="electrical-heading" class="text-3xl font-bold text-ww-cream mb-3">
                    Electrical Diagnostics & Repair
                  </h2>
                  <p class="text-lg text-ww-stone">
                    Complete electrical system diagnosis and repair by licensed electricians with 10+ years experience.
                  </p>
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Diagnostic Services</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Wiring troubleshooting
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Electrical load analysis
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Circuit testing
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Ground fault detection
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Repair & Upgrades</h3>
                  <ul class="space-y-2 text-ww-stone text-ww-gray-700">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Outlet & switch repair
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      LED lighting upgrades
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Panel upgrades
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Safety inspections
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section id="hvac-services" aria-labelledby="hvac-heading">
            <div class="card shadow border border-ww-gold">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-16 h-16 shadow border border-ww-gold bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl text-ww-gold border-ww-gold">
                    <FontAwesomeIcon :icon="faTemperatureArrowDown" />
                  </span>
                </div>
                <div>
                  <h2 id="hvac-heading" class="text-3xl font-bold text-ww-cream mb-3">
                    HVAC Service & Troubleshooting
                  </h2>
                  <p class="text-lg text-ww-stone">
                    Professional HVAC service by EPA-licensed technicians for optimal comfort in all weather conditions.
                  </p>
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Air Conditioning</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      System diagnostics
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Refrigerant service
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Component replacement
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Efficiency optimization
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Heating & Ventilation</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Furnace service
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Heat pump repair
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Thermostat upgrades
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Vent cleaning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section id="maintenance-services" aria-labelledby="maintenance-heading">
            <div class="card shadow border border-ww-gold">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-16 h-16 shadow border border-ww-gold bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-3xl text-ww-gold border-ww-gold">
                    <FontAwesomeIcon :icon="faWrench" />
                  </span>
                </div>
                <div>
                  <h2 id="maintenance-heading" class="text-3xl font-bold text-ww-cream mb-3">
                    Sealant, Plumbing, and Pre-Trip Inspections
                  </h2>
                  <p class="text-lg text-ww-stone">
                    Comprehensive maintenance services to keep your RV road-ready and prevent costly repairs.
                  </p>
                </div>
              </div>
              
              <div class="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Exterior Sealing</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Window sealing
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Door weatherstripping
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Roof penetrations
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Slide-out seals
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Plumbing Services</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Leak repairs
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Fixture replacement
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Water system service
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Winterization prep
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-ww-cream mb-3">Pre-Trip Inspections</h3>
                  <ul class="space-y-2 text-ww-stone">
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Safety system checks
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Electrical testing
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Fluid level checks
                    </li>
                    <li class="flex items-center">
                      <span class="w-2 h-2 bg-ww-gold rounded-full mr-3"></span>
                      Maintenance reminders
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div class="lg:col-span-1">
          <div class="sticky top-24 space-y-6">
            <div class="card">
              <h3 class="text-xl font-semibold text-ww-cream mb-4">Ready to Book?</h3>
              <div class="space-y-4">
                <a 
                  :href="`tel:${siteConfig.contact.phone}`"
                  class="w-full btn-primary text-center block"
                >
                  <FontAwesomeIcon :icon="faPhone" /> 
                  Call Now
                </a>
                <button 
                  @click="scrollToContact"
                  class="w-full btn-outline"
                >
                  <FontAwesomeIcon :icon="faClipboardList" /> 
                  Request Quote
                </button>
              </div>
              
              <div class="mt-6 pt-6 border-t border-ww-gray-200">
                <h4 class="font-semibold text-ww-cream mb-3">Contact Info</h4>
                <div class="space-y-2 text-sm text-ww-stone">
                  <div> 
                    <FontAwesomeIcon :icon="faPhone" /> 
                    {{ siteConfig.contact.phone }}
                  </div>
                  <div> 
                    <FontAwesomeIcon :icon="faEnvelope" />
                    {{ siteConfig.contact.email }}
                  </div>
                  <div>
                    <FontAwesomeIcon :icon="faEarthAmericas" />
                    {{ siteConfig.contact.serviceArea }}
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card">
              <h3 class="text-xl font-semibold text-ww-cream mb-4">Certifications</h3>
              <div class="space-y-3">
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
          </div>
        </div>
      </div>
    </div>
    
    <section id="contact-form" class="section-padding bg-ww-gray-50">
      <div class="container-wrapper">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-ww-ink mb-4">
              Request Service Quote
            </h2>
            <p class="text-xl text-ww-gray-600">
              Ready to book your service? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <div class="card">
            <ContactForm />
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGraduationCap,
         faShieldHalved,
         faSolarPanel,
         faPlugCircleBolt,
         faTemperatureArrowDown, 
         faWrench, 
         faPhone,
         faClipboardList,
         faEnvelope,
         faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

useHeadTags({
  title: 'RV Services & Repairs - RVTI Certified Mobile Technician',
  description: 'Complete RV repair services: RVTI-certified inspections, RV Armor roofing, solar installation, electrical diagnostics, HVAC service, and more.',
  keywords: 'RV repair services, RVTI certified inspection, RV Armor roofing, RV solar installation, mobile RV technician, RV electrical repair',
  image: '/og-services.jpg'
})

const scrollToContact = () => {
  const contactSection = document.getElementById('contact-form')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const firstInput = contactSection.querySelector('input, textarea') as HTMLElement
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 500)
    }
  }
}
</script>
