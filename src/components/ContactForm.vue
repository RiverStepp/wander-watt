<template>
  <form 
    @submit.prevent="handleSubmit"
    class="space-y-6"
    novalidate
    aria-label="Service booking form"
  >
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium text-ww-gold mb-2">
          Name *
        </label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          required
          class="input-field bg-navy text-ww-cream"
          :class="{ 'border-red-500': errors.name }"
          placeholder="Your full name"
          @blur="validateField('name')"
          @input="clearFieldError('name')"
          :aria-describedby="errors.name ? 'name-error' : undefined"
        />
        <p v-if="errors.name" id="name-error" class="mt-1 text-sm text-red-600" role="alert">
          {{ errors.name }}
        </p>
      </div>
      
      <div>
        <label for="email" class="block text-sm font-medium text-ww-gold mb-2">
          Email *
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          required
          class="input-field bg-navy text-ww-cream"
          :class="{ 'border-red-500': errors.email }"
          placeholder="your@email.com"
          @blur="validateField('email')"
          @input="clearFieldError('email')"
          :aria-describedby="errors.email ? 'email-error' : undefined"
        />
        <p v-if="errors.email" id="email-error" class="mt-1 text-sm text-red-600" role="alert">
          {{ errors.email }}
        </p>
      </div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <label for="phone" class="block text-sm font-medium text-ww-gold mb-2">
          Phone *
        </label>
        <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          required
          class="input-field bg-navy text-ww-cream"
          :class="{ 'border-red-500': errors.phone }"
          placeholder="(555) 123-4567"
          @blur="validateField('phone')"
          @input="clearFieldError('phone')"
          :aria-describedby="errors.phone ? 'phone-error' : undefined"
        />
        <p v-if="errors.phone" id="phone-error" class="mt-1 text-sm text-red-600" role="alert">
          {{ errors.phone }}
        </p>
      </div>
      
      <div>
        <label for="rigType" class="block text-sm font-medium text-ww-gold mb-2">
          RV Type *
        </label>
        <select
          id="rigType"
          v-model="formData.rigType"
          required
          class="input-field bg-navy"
          :class="[
            selectOpen.rigType || formData.rigType !== '' ? 'text-ww-cream' : 'placeholder-text',
            { 'border-red-500': errors.rigType }
          ]"
          @focus="selectOpen.rigType = true"
          @blur="selectOpen.rigType = false"
          @change="validateField('rigType')"
          :aria-describedby="errors.rigType ? 'rigType-error' : undefined"
        >
          <option value="">Select your RV type</option>
          <option value="Class A Motorhome">Class A Motorhome</option>
          <option value="Class B Motorhome">Class B Motorhome</option>
          <option value="Class C Motorhome">Class C Motorhome</option>
          <option value="Travel Trailer">Travel Trailer</option>
          <option value="Fifth Wheel">Fifth Wheel</option>
          <option value="Popup/Tent Trailer">Popup/Tent Trailer</option>
          <option value="Toy Hauler">Toy Hauler</option>
          <option value="Other">Other</option>
        </select>
        <p v-if="errors.rigType" id="rigType-error" class="mt-1 text-sm text-red-600" role="alert">
          {{ errors.rigType }}
        </p>
      </div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <label for="location" class="block text-sm font-medium text-ww-gold mb-2">
          Location (City, State) *
        </label>
        <input
          id="location"
          v-model="formData.location"
          type="text"
          required
          class="input-field bg-navy text-ww-cream"
          :class="{ 'border-red-500': errors.location }"
          placeholder="Nashville, TN"
          @blur="validateField('location')"
          @input="clearFieldError('location')"
          :aria-describedby="errors.location ? 'location-error' : undefined"
        />
        <p v-if="errors.location" id="location-error" class="mt-1 text-sm text-red-600" role="alert">
          {{ errors.location }}
        </p>
      </div>
      
      <div>
        <label for="preferredDate" class="block text-sm font-medium text-ww-gold mb-2">
          Preferred Date *
        </label>
        <input
          id="preferredDate"
          v-model="formData.preferredDate"
          type="date"
          required
          class="input-field bg-navy"
          :class="[
            (!!formData.preferredDate && formData.preferredDate.length === 10) ? 'text-ww-cream' : 'placeholder-text',
            { 'border-red-500': errors.preferredDate }
          ]"
          :min="minDate"
          @change="validateField('preferredDate')"
          :aria-describedby="errors.preferredDate ? 'preferredDate-error' : undefined"
        />
        <p v-if="errors.preferredDate" id="preferredDate-error" class="mt-1 text-sm text-red-600" role="alert">
          {{ errors.preferredDate }}
        </p>
      </div>
    </div>
    
    <div>
      <label for="serviceCategory" class="block text-sm font-medium text-ww-gold mb-2">
        Service Category *
      </label>
      <select
        id="serviceCategory"
        v-model="formData.serviceCategory"
        required
        class="input-field bg-navy"
        :class="[
          selectOpen.serviceCategory || formData.serviceCategory !== '' ? 'text-ww-cream' : 'placeholder-text',
          { 'border-red-500': errors.serviceCategory }
        ]"
        @focus="selectOpen.serviceCategory = true"
        @blur="selectOpen.serviceCategory = false"
        @change="validateField('serviceCategory')"
        :aria-describedby="errors.serviceCategory ? 'serviceCategory-error' : undefined"
      >
        <option value="">Select a service category</option>
        <option value="RVTI-Certified Technician & Inspector Services">RVTI-Certified Technician & Inspector Services</option>
        <option value="RV Armor Roof Installation & Maintenance">RV Armor Roof Installation & Maintenance</option>
        <option value="Solar & Battery Upgrades">Solar & Battery Upgrades</option>
        <option value="Electrical Diagnostics & Repair">Electrical Diagnostics & Repair</option>
        <option value="HVAC Service & Troubleshooting">HVAC Service & Troubleshooting</option>
        <option value="Sealant, Plumbing, and Pre-Trip Inspections">Sealant, Plumbing, and Pre-Trip Inspections</option>
        <option value="Other/Multiple Services">Other/Multiple Services</option>
      </select>
      <p v-if="errors.serviceCategory" id="serviceCategory-error" class="mt-1 text-sm text-red-600" role="alert">
        {{ errors.serviceCategory }}
      </p>
    </div>
    
    <div>
      <label for="message" class="block text-sm font-medium text-ww-gold mb-2">
        Message *
      </label>
      <textarea
        id="message"
        v-model="formData.message"
        required
        rows="4"
        class="input-field resize-vertical bg-navy text-ww-cream"
        :class="{ 'border-red-500': errors.message }"
        placeholder="Please describe your RV service needs, current issues, or any specific requirements..."
        @blur="validateField('message')"
        @input="clearFieldError('message')"
        :aria-describedby="errors.message ? 'message-error' : undefined"
      ></textarea>
      <p v-if="errors.message" id="message-error" class="mt-1 text-sm text-red-600" role="alert">
        {{ errors.message }}
      </p>
    </div>
    
    <div>
      <button
        type="submit"
        :disabled="isSubmitting || !isValid"
        class="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        :class="{ 'animate-pulse': isSubmitting }"
      >
        <span v-if="isSubmitting">Sending Request...</span>
        <span v-else>Send Service Request</span>
      </button>
    </div>
    
    <div 
      v-if="submitMessage"
      class="p-4 rounded-lg"
      :class="submitStatus === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'"
      role="alert"
      :aria-live="submitStatus === 'error' ? 'assertive' : 'polite'"
    >
      {{ submitMessage }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useContact } from '@/composables/useContact'
import { useA11yFocus } from '@/composables/useA11yFocus'

const { 
  formData, 
  errors, 
  isSubmitting, 
  submitStatus, 
  submitMessage, 
  isValid, 
  validateField, 
  submitForm 
} = useContact()

const { announce } = useA11yFocus()

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const selectOpen = reactive({
  rigType: false,
  serviceCategory: false,
})

const clearFieldError = (field: keyof typeof errors.value) => {
  if (errors.value[field]) {
    delete errors.value[field]
  }
}

const handleSubmit = async () => {
  const success = await submitForm()
  
  if (success) {
    announce('Service request sent successfully! We will contact you within 24 hours.')
  } else {
    announce('Error sending service request. Please check the form and try again.')
  }
}

onMounted(() => {
  const firstInput = document.getElementById('name')
  if (firstInput) {
    firstInput.focus()
  }
})
</script>
