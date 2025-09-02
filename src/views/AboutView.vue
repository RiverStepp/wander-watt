<template>
  <div>
    <section class="bg-gradient-to-br from-ww-gray-50 to-ww-gray-100 section-padding">
      <div class="container-wrapper">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold text-ww-ink mb-6">
              About John Stepp
            </h1>
            <p class="text-xl text-ww-gray-700 mb-8">
              RVTI-Certified Technician with 10+ years experience in commercial electrical, 
              HVAC systems, and RV service. Bringing professional mobile service to RV owners nationwide.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button 
                @click="scrollToContact"
                class="btn-primary"
              >
                <FontAwesomeIcon :icon="faClipboardList" class="mr-2" />
                Book a Service
              </button>
              <a 
                :href="`tel:${siteConfig.contact.phone}`"
                class="btn-outline"
              >
                <FontAwesomeIcon :icon="faPhone" class="mr-2" />
                Call {{ siteConfig.contact.phone }}
              </a>
            </div>
          </div>
          
          <div class="flex justify-center lg:justify-end">
            <div class="w-80 h-96 bg-ww-gray-200 rounded-lg shadow-xl flex items-center justify-center">
              <div class="text-center text-ww-gray-500">
                <div class="mb-4">
                  <FontAwesomeIcon :icon="faUser" class="text-8xl" />
                </div>
                <div class="font-semibold text-lg">John Stepp</div>
                <div class="text-sm">Founder & Lead Technician</div>
                <div class="text-xs mt-2">RVTI Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-padding">
      <div class="container-wrapper">
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg max-w-none text-ww-gray-700 space-y-6">
            <p>
              Hi, I'm John Stepp, founder of Wander Watt Mobile RV Services. With over a decade of experience as a commercial electrician and training in HVAC and industrial systems, I've built my career on solving tough technical problems and keeping people comfortable on the road and at home.
            </p>
            
            <p>
              My journey into RV service started with my own love for travel and the outdoors. After years of working in commercial electrical and industrial maintenance, I realized that RV owners were often left stranded by system failures, waiting days or weeks for dealership appointments, or dealing with technicians who didn't really understand the unique challenges of RV systems.
            </p>
            
            <p>
              That's when I decided to take my expertise on the road. I pursued RVTI certification (Levels 1 and 2), became a certified RV Armor installer, and obtained my EPA Universal Refrigerant License. I also gained hands-on experience working with RV systems during my time at Country Coach, where I learned the ins and outs of RV construction and quality standards.
            </p>
            
            <p>
              What sets Wander Watt apart is our combination of professional-grade expertise with true mobile convenience. I bring the same level of technical knowledge you'd expect from a top-tier commercial electrical contractor, but I come to you. Whether you're boondocking in the desert, staying at a resort, or parked at a state campground, I can diagnose and fix most issues on-site.
            </p>
            
            <p>
              My mission with Wander Watt is simple: Keep RVers, travelers, and full-timers on the road safely and confidently, with reliable mobile service that comes to you.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-padding bg-ww-gold bg-opacity-10">
      <div class="container-wrapper">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-ww-ink mb-8">
            Our Mission
          </h2>
          <div class="bg-white rounded-lg shadow-lg p-8 border border-ww-gold border-opacity-20">
            <blockquote class="text-xl md:text-2xl text-ww-gray-700 leading-relaxed italic">
              "To provide RV owners with professional, reliable mobile service that keeps them safely on the road, 
              combining certified expertise with the convenience of on-site repairs and maintenance."
            </blockquote>
            <cite class="block mt-6 text-ww-gray-700 font-semibold">- John Stepp, Founder</cite>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-padding">
      <div class="container-wrapper">
        <h2 class="text-3xl md:text-4xl font-bold text-ww-ink text-center mb-12">
          Experience & Background
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-semibold text-ww-ink mb-6">Professional Experience</h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-ww-gold bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon :icon="faPlugCircleBolt" class="text-2xl" />
                </div>
                <div>
                  <h4 class="font-semibold text-ww-ink">Commercial Electrician</h4>
                  <p class="text-ww-gray-600 mb-2">10+ Years</p>
                  <p class="text-sm text-ww-gray-700">
                    Extensive experience in industrial electrical systems, troubleshooting, and complex installations. 
                    Licensed and insured with expertise in high-voltage and control systems.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-ww-gold bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon :icon="faIndustry" class="text-2xl" />
                </div>
                <div>
                  <h4 class="font-semibold text-ww-ink">RV Manufacturing Experience</h4>
                  <p class="text-ww-gray-600 mb-2">Country Coach</p>
                  <p class="text-sm text-ww-gray-700">
                    Hands-on experience in luxury RV assembly and quality control, providing deep understanding 
                    of RV construction methods and system integration.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-ww-gold bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon :icon="faTemperatureArrowDown" class="text-2xl" />
                </div>
                <div>
                  <h4 class="font-semibold text-ww-ink">HVAC & Industrial Systems</h4>
                  <p class="text-ww-gray-600 mb-2">Specialized Training</p>
                  <p class="text-sm text-ww-gray-700">
                    Comprehensive training in heating, ventilation, air conditioning, and industrial control systems. 
                    EPA certified for all refrigerant types.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold text-ww-ink mb-6">Certifications & Training</h3>
            <div class="space-y-4">
              <div 
                v-for="cert in certifications"
                :key="cert.title"
                class="bg-white rounded-lg shadow-md p-4 border border-ww-gray-100"
              >
                <div class="flex items-center space-x-3">
                  <FontAwesomeIcon :icon="cert.icon" class="text-2xl text-ww-ink" />
                  <div>
                    <h4 class="font-semibold text-ww-ink">{{ cert.title }}</h4>
                    <p class="text-sm text-ww-gray-600">{{ cert.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-padding bg-ww-gray-50">
      <div class="container-wrapper">
        <h2 class="text-3xl md:text-4xl font-bold text-ww-ink text-center mb-12">
          Our Values
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="value in values"
            :key="value.title"
            class="text-center"
          >
            <div class="w-16 h-16 bg-ww-gold bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon :icon="value.icon" class="text-3xl" />
            </div>
            <h3 class="text-xl font-semibold text-ww-ink mb-3">{{ value.title }}</h3>
            <p class="text-ww-gray-700">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-padding">
      <div class="container-wrapper text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-ww-ink mb-6">
          Ready to Experience Professional Mobile RV Service?
        </h2>
        <p class="text-xl text-ww-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss your RV service needs and get you back on the road with confidence.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            @click="scrollToContact"
            class="btn-primary text-lg px-8 py-4"
          >
            <FontAwesomeIcon :icon="faClipboardList" class="mr-2" />
            Schedule Service
          </button>
          <RouterLink to="/services" class="btn-outline text-lg px-8 py-4">
            View Services
          </RouterLink>
        </div>
      </div>
    </section>
    
    <section id="contact-form" class="section-padding bg-ww-gray-50">
      <div class="container-wrapper">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-ww-ink mb-4">
              Get in Touch
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

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faClipboardList,
  faPhone,
  faUser,
  faIndustry,
  faTemperatureArrowDown,
  faGraduationCap,
  faShieldHalved,
  faPlugCircleBolt,
  faHandshake,
  faBullseye,
  faTruck,
  faLightbulb,
  faScrewdriverWrench
} from '@fortawesome/free-solid-svg-icons'

useHeadTags({
  title: 'About John Stepp - RVTI Certified RV Technician',
  description: 'Meet John Stepp, RVTI-certified technician with 10+ years experience in commercial electrical, HVAC, and RV systems. Mobile service across the US.',
  keywords: 'John Stepp, RVTI certified technician, RV repair expert, commercial electrician, mobile RV service',
  image: '/og-about.jpg'
})

const certifications = [
  {
    icon: faGraduationCap,
    title: 'RVTI Level 1 & 2 Technician & Inspector',
    description: 'Recreation Vehicle Industry Association certified technician and inspector'
  },
  {
    icon: faShieldHalved,
    title: 'RV Armor Certified Installer',
    description: 'Certified for premium RV roofing system installation and maintenance'
  },
  {
    icon: faTemperatureArrowDown,
    title: 'Universal EPA Refrigerant License',
    description: 'Licensed to work with all types of refrigerants in HVAC systems'
  },
  {
    icon: faPlugCircleBolt,
    title: 'Licensed Commercial Electrician',
    description: '10+ years experience in commercial and industrial electrical systems'
  }
]

const values = [
  {
    icon: faBullseye,
    title: 'Expertise',
    description: 'Certified, professional-grade knowledge combined with years of hands-on experience in RV and electrical systems.'
  },
  {
    icon: faTruck,
    title: 'Convenience',
    description: 'True mobile service that comes to you, whether at campgrounds, state parks, or remote locations.'
  },
  {
    icon: faHandshake,
    title: 'Reliability',
    description: 'Dependable service you can trust, with clear communication and on-time appointments.'
  },
  {
    icon: faLightbulb,
    title: 'Education',
    description: 'We believe in teaching our customers about their RV systems for better maintenance and prevention.'
  },
  {
    icon: faScrewdriverWrench,
    title: 'Quality',
    description: 'Professional-grade tools, parts, and techniques ensure repairs that last.'
  },
  {
    icon: faShieldHalved,
    title: 'Safety',
    description: 'Every repair prioritizes your safety and the integrity of your RV systems.'
  }
]

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
