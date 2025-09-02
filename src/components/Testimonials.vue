<template>
  <section class="section-padding bg-ww-surface bg-opacity-40" aria-labelledby="testimonials-heading">
    <div class="container-wrapper">
      <div class="text-center mb-12">
        <h2 id="testimonials-heading" class="text-3xl md:text-4xl font-bold text-ww-cream mb-4">
          What Our Customers Say
        </h2>
        <p class="text-xl text-ww-stone max-w-2xl mx-auto">
          Trusted by RV owners across the United States for reliable, professional mobile service.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-ww-gray-800 bg-opacity-90 rounded-lg shadow-md p-6 border border-ww-gold border-opacity-30 hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex items-center mb-4">
            <div class="flex text-ww-gold" :aria-label="`${testimonial.rating} out of 5 stars`">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-6 h-6"
                :class="[
                  i <= Math.round(testimonial.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                ]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          
          <blockquote class="text-ww-stone mb-4 leading-relaxed">
            "{{ testimonial.quote }}"
          </blockquote>
          
          <div class="flex items-center">
            <div class="w-10 h-10 bg-ww-gold bg-opacity-30 rounded-full flex items-center justify-center mr-3">
              <span class="font-semibold text-ww-gold">{{ testimonial.author.charAt(0) }}</span>
            </div>
            <div>
              <cite class="font-medium text-ww-cream not-italic">{{ testimonial.author }}</cite>
              <div class="text-sm text-ww-stone">{{ testimonial.location }}</div>
              <div class="text-xs text-ww-stone opacity-80">{{ testimonial.service }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <p class="text-lg text-ww-stone mb-6">
          Ready to experience our professional service?
        </p>
        <button 
          @click="scrollToContact"
          class="btn-primary text-lg px-8 py-4"
        >
          Book Your Service Today
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const testimonials = [
  {
    rating: 5,
    quote: "John saved our vacation! Our RV's electrical system failed at a state park, and he had us back up and running the same day. Professional, knowledgeable, and fair pricing.",
    author: "Mike & Sarah Johnson",
    location: "Denver, CO",
    service: "Electrical Repair"
  },
  {
    rating: 5,
    quote: "Best RV service we've ever had. The RV Armor roof installation was flawless, and John explained everything thoroughly. Highly recommend for any RV owner.",
    author: "Robert Chen",
    location: "Phoenix, AZ",
    service: "RV Armor Roof Installation"
  },
  {
    rating: 5,
    quote: "Finally found an RV technician I can trust. RVTI certified and shows up when promised. John's solar installation has been perfect for our full-time travels.",
    author: "Linda & Tom Williams",
    location: "Austin, TX",
    service: "Solar Installation"
  },
  {
    rating: 5,
    quote: "Professional service from start to finish. John diagnosed our HVAC issue quickly and had parts on his truck. No more waiting weeks for dealership appointments!",
    author: "Jennifer Martinez",
    location: "Tampa, FL",
    service: "HVAC Repair"
  },
  {
    rating: 5,
    quote: "The pre-trip inspection caught several issues that could have ruined our cross-country trip. Worth every penny for the peace of mind.",
    author: "David & Karen Smith",
    location: "Seattle, WA",
    service: "RVTI Inspection"
  },
  {
    rating: 5,
    quote: "Knowledgeable, honest, and reliable. John re-sealed our RV and fixed multiple small issues. Great communication throughout the process.",
    author: "Mark Thompson",
    location: "Nashville, TN",
    service: "Sealant & Maintenance"
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
  } else {
    window.location.href = '/contact'
  }
}
</script>
