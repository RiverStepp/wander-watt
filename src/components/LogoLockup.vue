<template>
  <div class="flex items-center space-x-3">
    <div class="logo-container">
      <img 
        src="/src/assets/logo.png"
        :alt="siteConfig.name"
        :class="logoClasses"
        width="40"
        height="40"
        loading="eager"
        @error="handleImageError"
      />
    </div>
    
    <div v-if="showText" class="flex flex-col">
      <span class="font-bold text-lg leading-tight text-ww-cream">
        Wander Watt
      </span>
      <span class="text-sm text-ww-stone leading-tight flex items-center">
        Mobile RV Services
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { siteConfig } from '@/config/site'

interface Props {
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'light' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  showText: true,
  size: 'md',
  variant: 'default'
})

const imageError = ref(false)

const logoClasses = computed(() => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8 md:h-10 md:w-10',
    lg: 'h-12 w-12 md:h-16 md:w-16'
  }
  
  return [
    sizeClasses[props.size],
    'object-contain transition-transform duration-200 hover:scale-105 logo-image'
  ].join(' ')
})

const handleImageError = () => {
  imageError.value = true
  console.warn('Logo image failed to load, using text fallback')
}
</script>
