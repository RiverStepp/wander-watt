import { ref, nextTick } from 'vue'

export function useA11yFocus() {
  const announcements = ref<string[]>([])
  
  const focusElement = async (selector: string | HTMLElement) => {
    await nextTick()
    
    let element: HTMLElement | null
    
    if (typeof selector === 'string') {
      element = document.querySelector(selector)
    } else {
      element = selector
    }
    
    if (element) {
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '-1')
      }
      
      element.focus()
      
      setTimeout(() => {
        if (element?.getAttribute('tabindex') === '-1') {
          element.removeAttribute('tabindex')
        }
      }, 100)
    }
  }
  
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    announcements.value.push(message)
    
    let liveRegion = document.getElementById('a11y-announcer')
    
    if (!liveRegion) {
      liveRegion = document.createElement('div')
      liveRegion.id = 'a11y-announcer'
      liveRegion.setAttribute('aria-live', priority)
      liveRegion.setAttribute('aria-atomic', 'true')
      liveRegion.setAttribute('class', 'sr-only')
      liveRegion.style.cssText = `
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      `
      document.body.appendChild(liveRegion)
    }
    
    liveRegion.setAttribute('aria-live', priority)
    
    liveRegion.textContent = ''
    setTimeout(() => {
      if (liveRegion) {
        liveRegion.textContent = message
      }
    }, 100)
    
    setTimeout(() => {
      const index = announcements.value.indexOf(message)
      if (index > -1) {
        announcements.value.splice(index, 1)
      }
    }, 5000)
  }
  
  const trapFocus = (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>
    
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }
    
    container.addEventListener('keydown', handleTabKey)
    
    if (firstElement) {
      firstElement.focus()
    }
    
    return () => {
      container.removeEventListener('keydown', handleTabKey)
    }
  }
  
  const handleEscapeKey = (callback: () => void) => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback()
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }
  
  return {
    announcements,
    focusElement,
    announce,
    trapFocus,
    handleEscapeKey
  }
}
