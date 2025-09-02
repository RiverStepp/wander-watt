import { ref, onMounted, onUnmounted } from 'vue'

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

export function useBreakpoints() {
  const windowWidth = ref(0)
  
  const updateWidth = () => {
    windowWidth.value = window.innerWidth
  }
  
  const isAbove = (breakpoint: keyof typeof breakpoints) => {
    return windowWidth.value >= breakpoints[breakpoint]
  }
  
  const isBelow = (breakpoint: keyof typeof breakpoints) => {
    return windowWidth.value < breakpoints[breakpoint]
  }
  
  const isBetween = (min: keyof typeof breakpoints, max: keyof typeof breakpoints) => {
    return windowWidth.value >= breakpoints[min] && windowWidth.value < breakpoints[max]
  }
  
  const isMobile = () => isBelow('md')
  const isTablet = () => isBetween('md', 'lg')
  const isDesktop = () => isAbove('lg')
  
  onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })
  
  return {
    windowWidth,
    isAbove,
    isBelow,
    isBetween,
    isMobile,
    isTablet,
    isDesktop
  }
}
