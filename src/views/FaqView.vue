<template>
  <div>
    <section class="bg-gradient-to-br from-ww-gray-50 to-ww-gray-100 section-padding">
      <div class="container-wrapper text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-ww-ink mb-6">
          RV Maintenance Tips & Service Updates
        </h1>
        <p class="text-xl text-ww-gray-700 max-w-3xl mx-auto mb-8">
          Expert advice, maintenance tips, and industry insights from certified RV technicians. 
          Stay informed to keep your RV running smoothly and safely on the road.
        </p>
      </div>
    </section>

    <section class="section-padding bg-ww-gray-50">
      <div class="container-wrapper">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-ww-ink text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div class="space-y-6">
            <div 
              v-for="(faq, index) in faqs"
              :key="index"
              class="bg-white rounded-lg shadow-md p-6 border border-ww-gray-100"
            >
              <button 
                @click="toggleFAQ(index)"
                class="w-full text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-ww-gray-700 rounded"
                :aria-expanded="openFAQs[index]"
                :aria-controls="`faq-content-${index}`"
              >
                <h3 class="text-lg font-semibold text-ww-ink pr-4">{{ faq.question }}</h3>
                <span class="text-ww-gray-700 text-xl flex-shrink-0 transition-transform duration-200" 
                      :class="{ 'rotate-180': openFAQs[index] }">
                    <FontAwesomeIcon :icon="faChevronDown" />
                </span>
              </button>
              
              <div 
                v-show="openFAQs[index]"
                :id="`faq-content-${index}`"
                class="mt-4 text-ww-gray-700"
                :aria-hidden="!openFAQs[index]"
              >
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-padding">
      <div class="container-wrapper">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-ww-ink mb-4">
            Nationwide Mobile Service
          </h2>
          <p class="text-xl text-ww-gray-600 max-w-3xl mx-auto">
            We provide mobile RV service across the United States, bringing professional repair 
            and maintenance directly to your location.
          </p>
        </div>
        
        <div class="flex justify-center">
          <div class="w-full max-w-4xl h-96 bg-ww-gray-200 rounded-lg shadow-lg flex items-center justify-center">
            <div class="text-center text-ww-gray-500">
              <div class="mb-4">
                <FontAwesomeIcon :icon="faMapLocationDot" class="text-8xl" />
              </div>
              <div class="font-semibold text-xl mb-2">United States Coverage</div>
              <div class="text-lg">Mobile RV Service Available Nationwide</div>
              <div class="text-sm mt-4 max-w-md mx-auto">
                From state parks to private campgrounds, RV resorts to boondocking sites - 
                we bring professional service to your location.
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-8 text-center">
          <p class="text-ww-gray-600 mb-4">
            Travel fees may apply based on location and distance from major metropolitan areas.
          </p>
          <button 
            class="btn-primary"
          >
            Get Location-Specific Quote
          </button>
        </div>
      </div>
    </section>
    
    <section class="section-padding">
      <div class="container-wrapper">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-ww-ink mb-4">
            RV Maintenance Tips
          </h2>
          <p class="text-lg text-ww-gray-600">
            Here are some essential tips to keep your RV in top condition.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="tip in quickTips"
            :key="tip.title"
            class="card hover:shadow-lg transition-shadow duration-300 shadow border border-ww-gold"
          >
            <div class="flex items-center">
              <div class="text-3xl mb-4 mr-2">
                <FontAwesomeIcon :icon="tip.icon" class="text-ww-gold" />
              </div>
              <h3 class="text-xl font-semibold text-ww-cream mb-3">{{ tip.title }}</h3>
            </div>

            <p class="text-ww-stone mb-4">{{ tip.description }}</p>
            <div class="text-sm text-ww-gold font-medium">
              {{ tip.frequency }}
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <p class="text-lg text-ww-gray-600 mb-6">
            Need professional help with maintenance or repairs?
          </p>
          <RouterLink to="/services" class="btn-primary text-lg px-8 py-4">
            Book Professional Service
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useHeadTags } from '@/composables/useHeadTags';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faChevronDown,
  faMapLocationDot,
  faMagnifyingGlass,
  faCarBattery,
  faDroplet,
  faGauge,
  faTemperatureArrowDown,
  faWrench
} from '@fortawesome/free-solid-svg-icons';

useHeadTags({
  title: 'RV Maintenance Tips & Service Updates Blog',
  description: 'Expert RV maintenance tips, service updates, and industry insights from certified RV technicians. Coming soon with valuable content for RV owners.',
  keywords: 'RV maintenance tips, RV blog, RV repair guides, RV service updates, RV troubleshooting',
  image: '/og-blog.jpg'
})

const openFAQs = ref<boolean[]>([])

const faqs = [
  {
    question: "What areas do you service?",
    answer: "We provide mobile RV service across the United States. Whether you're at a state park, private campground, RV resort, or boondocking in remote areas, we can reach you. Travel fees may apply based on location and distance."
  },
  {
    question: "How quickly can you respond to service calls?",
    answer: "For non-emergency service, we typically schedule appointments within 2-5 business days depending on location and current workload. Emergency services are available 24/7 with additional fees, and we strive to respond within 4-8 hours for urgent breakdowns."
  },
  {
    question: "What types of payment do you accept?",
    answer: "We accept cash, check, and all major credit cards. Payment is due upon completion of service unless other arrangements have been made in advance. We also provide detailed invoices for insurance or warranty claims."
  },
  {
    question: "Do you provide warranties on your work?",
    answer: "Yes, we provide a 90-day warranty on all labor and a manufacturer warranty on parts. For RV Armor roof installations, we provide the full manufacturer warranty. All warranty work must be performed by Wander Watt to maintain coverage."
  },
  {
    question: "What should I have ready when you arrive?",
    answer: "Please have your RV accessible for service, with any relevant documentation (manuals, previous service records, warranty information) available. If possible, clear the work area and ensure we have access to electrical hookups if needed for power tools."
  },
  {
    question: "Do you carry parts on your service vehicle?",
    answer: "Our mobile service unit is stocked with common replacement parts, electrical components, plumbing fittings, and basic repair supplies. For specialized or large components, we may need to order parts, but we'll do our best to provide temporary solutions to keep you mobile."
  },
  {
    question: "How do you handle service in remote areas?",
    answer: "We're equipped to service RVs in remote locations including boondocking sites and areas without hookups. Our service vehicle is self-contained with its own power source and tools. We do charge additional travel fees for remote locations based on distance and accessibility."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed and insured for mobile RV service. John Stepp holds RVTI Level 1 & 2 certifications, is an RV Armor certified installer, has a Universal EPA Refrigerant License, and 10+ years experience as a licensed commercial electrician."
  }
]

faqs.forEach(() => openFAQs.value.push(false))

const toggleFAQ = (index: number) => {
  openFAQs.value[index] = !openFAQs.value[index]
}

const quickTips = [
  {
    icon: faMagnifyingGlass,
    title: 'Regular Roof Inspections',
    description: 'Check your RV roof monthly for cracks, soft spots, or damaged sealant around vents and fixtures.',
    frequency: 'Monthly'
  },
  {
    icon: faCarBattery,
    title: 'Battery Maintenance',
    description: 'Keep batteries clean, check water levels (if applicable), and test voltage regularly to prevent failure.',
    frequency: 'Monthly'
  },
  {
    icon: faDroplet,
    title: 'Water System Care',
    description: 'Sanitize your fresh water system quarterly and check for leaks in plumbing connections.',
    frequency: 'Quarterly'
  },
  {
    icon: faGauge,
    title: 'Tire Pressure Checks',
    description: 'Check tire pressure weekly when traveling and monthly when stored. Proper pressure prevents blowouts.',
    frequency: 'Weekly/Monthly'
  },
  {
    icon: faTemperatureArrowDown,
    title: 'HVAC Filter Changes',
    description: 'Replace air conditioning and heating filters regularly to maintain efficiency and air quality.',
    frequency: 'Every 3 Months'
  },
  {
    icon: faWrench,
    title: 'Slide-Out Maintenance',
    description: 'Keep slide-out mechanisms clean and lubricated, and check seals for wear or damage.',
    frequency: 'Every 6 Months'
  }
]

</script>
