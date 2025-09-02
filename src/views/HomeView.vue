<template>
  <div>
    <Hero />
    
    <section class="section-padding" aria-labelledby="about-heading">
      <div class="container-wrapper">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="about-heading" class="text-3xl md:text-4xl font-bold text-ww-ink mb-6">
              About Wander Watt
            </h2>
            <div class="prose prose-lg text-ww-gray-700 space-y-4">
              <p>
                Hi, I'm John Stepp, founder of Wander Watt Mobile RV Services. With over a decade of experience as a commercial electrician and training in HVAC and industrial systems, I've built my career on solving tough technical problems and keeping people comfortable on the road and at home.
              </p>
              <p>
                My mission with Wander Watt is simple: Keep RVers, travelers, and full-timers on the road safely and confidently, with reliable mobile service that comes to you.
              </p>
            </div>
            <div class="mt-6">
              <RouterLink to="/about" class="btn-outline">
                Read Full Story
              </RouterLink>
            </div>
          </div>
          
          <div class="flex justify-center lg:justify-end">
            <div class="w-80 h-80 bg-ww-gray-200 rounded-lg shadow-lg flex items-center justify-center">
              <div class="text-center text-ww-gray-500">
                <div class="text-6xl mb-4">
                    <FontAwesomeIcon :icon="faUser" />
                </div>
                <div class="font-medium">John Stepp</div>
                <div class="text-sm">Founder & Lead Technician</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-padding bg-ww-surface bg-opacity-50" aria-labelledby="services-heading">
      <div class="container-wrapper">
        <div class="text-center mb-12">
          <h2 id="services-heading" class="text-3xl md:text-4xl font-bold text-ww-cream mb-4">
            Professional RV Services
          </h2>
          <p class="text-xl text-ww-stone max-w-3xl mx-auto">
            From routine maintenance to complex repairs, we bring certified expertise directly to your location.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            v-for="service in services"
            :key="service.title"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            :features="service.features"
            link-to="/services"
            @action="handleServiceAction"
          />
        </div>
        
        <div class="text-center mt-12">
          <RouterLink to="/services" class="btn-primary text-lg px-8 py-4">
            View All Services
          </RouterLink>
        </div>
      </div>
    </section>
    
    <section class="section-padding" aria-labelledby="why-choose-heading">
      <div class="container-wrapper">
        <div class="text-center mb-12">
          <h2 id="why-choose-heading" class="text-3xl md:text-4xl font-bold text-ww-ink mb-4">
            Why Choose Wander Watt
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(reason, index) in whyChooseReasons"
            :key="index"
            class="text-center p-6"
          >
            <div class="flex items-center justify-center w-16 h-16 rounded-full text-white font-bold text-xs mb-4 mx-auto shadow-lg" :class="reason.color">
              {{ reason.icon }}
            </div>
            <h3 class="text-xl font-semibold text-ww-ink mb-3">{{ reason.title }}</h3>
            <p class="text-ww-gray-600">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-padding bg-ww-surface bg-opacity-30" aria-labelledby="service-area-heading">
      <div class="container-wrapper">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="service-area-heading" class="text-3xl md:text-4xl font-bold text-ww-cream mb-6">
              Service Area
            </h2>
            <div class="prose prose-lg text-ww-stone space-y-4">
              <p>
                Proudly serving RV owners across the United States — from state parks to resorts, 
                Wander Watt brings the service bay to your site.
              </p>
              <p>
                Whether you're parked at a campground, boondocking in the wilderness, or staying 
                at an RV resort, our mobile service unit comes equipped with professional tools 
                and parts to handle most repairs on-site.
              </p>
              <p class="text-sm text-ww-stone opacity-80">
                * Travel fees may apply based on location and distance
              </p>
            </div>
          </div>
          
          <div class="flex justify-center lg:justify-end">
            <div class="w-full max-w-md h-80 bg-ww-gray-200 rounded-lg shadow-lg flex items-center justify-center">
              <div class="text-center text-ww-gray-500">
                <div class="text-6xl mb-4">
                    <FontAwesomeIcon :icon="faGlobe" />
                </div>
                <div class="font-medium">United States Coverage</div>
                <div class="text-sm">Mobile RV Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Testimonials />
    
    <section id="contact-form" class="section-padding" aria-labelledby="contact-heading">
      <div class="container-wrapper">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 id="contact-heading" class="text-3xl md:text-4xl font-bold text-ww-ink mb-4">
              Book Your Service
            </h2>
            <p class="text-xl text-ww-gray-600">
              Ready to get your RV serviced? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <div class="card border-ww-gold">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    
    <FooterCTA />
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import Testimonials from '@/components/Testimonials.vue'
import ContactForm from '@/components/ContactForm.vue'
import FooterCTA from '@/components/FooterCTA.vue'
import { useHeadTags } from '@/composables/useHeadTags'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

useHeadTags({
  title: 'Mobile RV Repair & Solar Services - Wander Watt',
  description: 'RVTI-Certified Mobile RV Services across the United States. Solar, electrical, HVAC, roof repair and more. We bring the service bay to you.',
  keywords: 'mobile RV repair, RV solar installation, RVTI certified technician, RV roof repair, mobile RV service',
  image: '/og-home.jpg'
})

const services = [
  {
    icon: 'RVTI',
    title: 'RVTI-Certified Technician & Inspector Services',
    description: 'Professional RV inspection and certification services following industry standards.',
    features: ['Pre-purchase inspections', 'Annual safety inspections', 'Warranty work', 'Diagnostic services']
  },
  {
    icon: 'ROOF',
    title: 'RV Armor Roof Installation & Maintenance',
    description: 'Premium roofing solutions with RV Armor certified installation and maintenance.',
    features: ['Complete roof replacement', 'Leak repair', 'Preventive maintenance', 'Warranty coverage']
  },
  {
    icon: 'SOL',
    title: 'Solar & Battery Upgrades',
    description: 'Professional solar system design, installation, and battery upgrades for off-grid power.',
    features: ['Solar panel installation', 'Battery bank upgrades', 'Inverter systems', 'Energy monitoring']
  },
  {
    icon: 'ELEC',
    title: 'Electrical Diagnostics & Repair',
    description: 'Complete electrical system diagnosis and repair by certified electricians.',
    features: ['Wiring troubleshooting', 'Outlet & switch repair', 'Lighting upgrades', 'Safety inspections']
  },
  {
    icon: 'HVAC',
    title: 'HVAC Service & Troubleshooting',
    description: 'Air conditioning and heating system maintenance, repair, and optimization.',
    features: ['AC system service', 'Heating repair', 'Thermostat upgrades', 'Duct cleaning']
  },
  {
    icon: 'MAINT',
    title: 'Sealant, Plumbing, and Pre-Trip Inspections',
    description: 'Comprehensive maintenance services to keep your RV road-ready.',
    features: ['Exterior sealing', 'Plumbing repairs', 'Pre-trip inspections', 'Maintenance checks']
  }
]

const whyChooseReasons = [
  {
    icon: 'ELEC',
    title: '10+ Years Professional Electrician',
    description: 'Extensive experience in commercial electrical work and industrial systems brings expertise to every RV repair.',
    color: 'bg-ww-gold'
  },
  {
    icon: 'CERT',
    title: 'Certified RV Armor Roofing Installer',
    description: 'Official certification for premium RV roofing systems with manufacturer warranty backing.',
    color: 'bg-ww-gold'
  },
  {
    icon: 'RVTI',
    title: 'RVTI Level 1 & Level 2 Technician & Inspector',
    description: 'Industry-standard certification ensuring professional service and up-to-date knowledge.',
    color: 'bg-ww-gold'
  },
  {
    icon: 'EPA',
    title: 'Universal EPA Refrigerant License',
    description: 'Certified to work with all refrigerant types for HVAC and refrigeration systems.',
    color: 'bg-ww-gold'
  },
  {
    icon: 'MFG',
    title: 'Hands-on RV Assembly Experience',
    description: 'Real manufacturing experience at Country Coach provides inside knowledge of RV systems.',
    color: 'bg-ww-gold'
  },
  {
    icon: 'MOB',
    title: 'Reliable Mobile Service',
    description: 'Professional service built around your schedule, bringing the shop to your location.',
    color: 'bg-ww-gold'
  }
]

const handleServiceAction = (serviceName: string) => {
  const contactSection = document.getElementById('contact-form')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    
    setTimeout(() => {
      const serviceSelect = document.getElementById('serviceCategory') as HTMLSelectElement
      if (serviceSelect) {
        serviceSelect.value = serviceName
        serviceSelect.focus()
      }
    }, 500)
  }
}
</script>
