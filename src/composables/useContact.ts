import { ref, computed } from 'vue'
import { z } from 'zod'

// Validation schema
// TODO: This is the same as whats in send-email.ts. Need to avoid code duplication
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  rigType: z.string().min(1, 'Please select your RV type'),
  location: z.string().min(3, 'Please enter your city and state'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  serviceCategory: z.string().min(1, 'Please select a service category'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export type ContactFormData = z.infer<typeof contactSchema>

export function useContact() {
  const formData = ref<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    rigType: '',
    location: '',
    preferredDate: '',
    serviceCategory: '',
    message: ''
  })
  
  const errors = ref<Partial<Record<keyof ContactFormData, string>>>({})
  const isSubmitting = ref(false)
  const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
  const submitMessage = ref('')
  
  const isValid = computed(() => {
    try {
      contactSchema.parse(formData.value)
      return true
    } catch {
      return false
    }
  })
  
  const validateField = (field: keyof ContactFormData) => {
    try {
      const fieldSchema = contactSchema.shape[field]
      fieldSchema.parse(formData.value[field])
      delete errors.value[field]
    } catch (error) {
      if (error instanceof z.ZodError) {
        errors.value[field] = error.errors[0].message
      }
    }
  }
  
  const validateForm = () => {
    try {
      contactSchema.parse(formData.value)
      errors.value = {}
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {}
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof ContactFormData
          newErrors[field] = err.message
        })
        errors.value = newErrors
      }
      return false
    }
  }
  
  const submitForm = async () => {
    if (!validateForm()) {
      return false
    }
    
    isSubmitting.value = true
    submitStatus.value = 'idle'
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.value)
      })
      
      const result = await response.json()
      
      if (response.ok && result.ok) {
        submitStatus.value = 'success'
        submitMessage.value = 'Thank you for your message! We\'ll get back to you within 24 hours.'
        
        formData.value = {
          name: '',
          email: '',
          phone: '',
          rigType: '',
          location: '',
          preferredDate: '',
          serviceCategory: '',
          message: ''
        }
        errors.value = {}
        
        return true
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      submitStatus.value = 'error'
      submitMessage.value = error instanceof Error ? error.message : 'Failed to send message. Please try again or call us directly.'
      return false
    } finally {
      isSubmitting.value = false
    }
  }
  
  const resetForm = () => {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      rigType: '',
      location: '',
      preferredDate: '',
      serviceCategory: '',
      message: ''
    }
    errors.value = {}
    submitStatus.value = 'idle'
    submitMessage.value = ''
  }
  
  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    submitMessage,
    isValid,
    validateField,
    validateForm,
    submitForm,
    resetForm
  }
}
