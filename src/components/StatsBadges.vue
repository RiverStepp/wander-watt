<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <div 
      v-for="(badge, index) in badges"
      :key="badge.label"
      class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in border border-ww-stone"
      :style="{ animationDelay: `${index * 0.1}s` }"
    >
      <div class="flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-xs mb-3 mx-auto" :class="badge.color">
        {{ badge.icon }}
      </div>
      <div class="font-semibold text-ww-ink text-sm">{{ badge.label }}</div>
      <div class="text-xs text-ww-gray-600 mt-1">{{ badge.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

// TODO: Add real icons
const badges = [
  {
    icon: 'RVTI',
    label: 'RVTI Level 1 & 2',
    description: 'Certified Technician & Inspector',
    color: 'bg-ww-gold'
  },
  {
    icon: 'RVA',
    label: 'RV Armor Certified',
    description: 'Roof Installation Expert',
    color: 'bg-ww-gold'
  },
  {
    icon: 'EPA',
    label: 'EPA Licensed',
    description: 'Universal Refrigerant',
    color: 'bg-ww-gold'
  },
  {
    icon: '10+',
    label: '10+ Years',
    description: 'Commercial Electrician',
    color: 'bg-ww-gold'
  }
]
</script>
