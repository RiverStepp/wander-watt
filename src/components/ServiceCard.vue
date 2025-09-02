<template>
  <div class="card hover:shadow-xl transition-all duration-300 group border-ww-gold cursor-pointer">
    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0">
        <div class="w-12 h-12 bg-gradient-to-br from-ww-sage-light to-ww-sage rounded-lg flex items-center justify-center group-hover:from-ww-gold group-hover:to-ww-terracotta transition-all duration-300 shadow-md">
          <div class="w-6 h-6 rounded-sm flex items-center justify-center">
            <span class="text-xs font-bold text-ww-ink">{{ icon }}</span>
          </div>
        </div>
      </div>
      
      <div class="flex-1">
        <h3 class="text-xl font-semibold text-ww-cream mb-3 group-hover:text-ww-gold transition-colors duration-300">
          {{ title }}
        </h3>
        
        <p class="text-ww-stone mb-4 leading-relaxed">
          {{ description }}
        </p>
        
        <ul v-if="features && features.length" class="text-sm text-ww-stone space-y-1 mb-4">
          <li v-for="feature in features" :key="feature" class="flex items-center">
            <span class="w-1.5 h-1.5 bg-ww-gold rounded-full mr-2 flex-shrink-0"></span>
            {{ feature }}
          </li>
        </ul>
        
        <RouterLink 
          v-if="linkTo"
          :to="linkTo"
          class="inline-flex items-center text-ww-gold font-medium duration-200"
        >
          Learn More
          <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </RouterLink>
        
        <button 
          v-else
          @click="$emit('action', title)"
          class="inline-flex items-center text-ww-gold hover:text-ww-navy font-medium transition-colors duration-200"
        >
          Book This Service
          <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
  features?: string[]
  linkTo?: string
}

defineProps<Props>()
defineEmits<{
  action: [serviceName: string]
}>()
</script>
