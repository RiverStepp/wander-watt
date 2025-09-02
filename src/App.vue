<template>
  <div id="app" class="min-h-screen bg-white">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <NavBar />
    
    <main id="main-content" role="main">
      <RouterView />
    </main>
    
    <SiteFooter />
    
    <div id="a11y-announcer" aria-live="polite" aria-atomic="true" class="sr-only"></div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { useRoute } from 'vue-router'
import { useHeadTags } from '@/composables/useHeadTags'
import { watch } from 'vue'

const route = useRoute()
const { updateTitle, updateDescription } = useHeadTags()

watch(() => route.meta, (meta) => {
  if (meta.title) {
    updateTitle(meta.title as string)
  }
  if (meta.description) {
    updateDescription(meta.description as string)
  }
}, { immediate: true })
</script>

<style>
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
</style>
