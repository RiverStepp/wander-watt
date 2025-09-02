import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { siteConfig } from '@/config/site'

interface HeadTagsOptions {
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: 'website' | 'article'
  canonical?: string
  noIndex?: boolean
}

export function useHeadTags(options: HeadTagsOptions = {}) {
  const route = useRoute()
  
  const updateTitle = (title: string) => {
    const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`
    document.title = fullTitle
    
    updateMetaTag('property', 'og:title', fullTitle)
    updateMetaTag('name', 'twitter:title', fullTitle)
  }
  
  const updateDescription = (description: string) => {
    updateMetaTag('name', 'description', description)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('name', 'twitter:description', description)
  }
  
  const updateKeywords = (keywords: string) => {
    updateMetaTag('name', 'keywords', keywords)
  }
  
  const updateImage = (imageUrl: string) => {
    const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${siteConfig.url}${imageUrl}`
    updateMetaTag('property', 'og:image', fullImageUrl)
    updateMetaTag('name', 'twitter:image', fullImageUrl)
  }
  
  const updateCanonical = (url: string) => {
    const canonical = url.startsWith('http') ? url : `${siteConfig.url}${url}`
    
    const existingCanonical = document.querySelector('link[rel="canonical"]')
    if (existingCanonical) {
      existingCanonical.remove()
    }
    
    const link = document.createElement('link')
    link.rel = 'canonical'
    link.href = canonical
    document.head.appendChild(link)
    
    updateMetaTag('property', 'og:url', canonical)
  }
  
  const updateMetaTag = (attribute: string, value: string, content: string) => {
    let tag = document.querySelector(`meta[${attribute}="${value}"]`)
    
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute(attribute, value)
      document.head.appendChild(tag)
    }
    
    tag.setAttribute('content', content)
  }
  
  const updateStructuredData = () => {
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      areaServed: siteConfig.contact.serviceArea,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address.street,
        addressLocality: siteConfig.contact.address.city,
        addressRegion: siteConfig.contact.address.state,
        postalCode: siteConfig.contact.address.zip,
        addressCountry: 'US'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'RV Services',
        itemListElement: siteConfig.business.specialties.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service
          }
        }))
      },
      founder: {
        '@type': 'Person',
        name: siteConfig.business.owner
      },
      sameAs: [
        siteConfig.social.facebook,
        siteConfig.social.instagram,
        siteConfig.social.youtube,
        siteConfig.social.linkedin
      ]
    }
    
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
  }
  
  const initializeSEO = () => {
    const {
      title = siteConfig.name,
      description = siteConfig.description,
      keywords = siteConfig.seo.keywords,
      image = '/og-image.jpg',
      type = 'website',
      canonical = route.fullPath,
      noIndex = false
    } = options
    
    updateTitle(title)
    updateDescription(description)
    updateKeywords(keywords)
    updateCanonical(canonical)
    
    updateMetaTag('property', 'og:type', type)
    updateMetaTag('property', 'og:site_name', siteConfig.name)
    updateMetaTag('name', 'twitter:card', 'summary_large_image')
    updateMetaTag('name', 'twitter:site', siteConfig.seo.twitterHandle)
    updateMetaTag('name', 'twitter:creator', siteConfig.seo.twitterHandle)
    
    if (image) {
      updateImage(image)
    }
    
    if (noIndex) {
      updateMetaTag('name', 'robots', 'noindex, nofollow')
    } else {
      updateMetaTag('name', 'robots', 'index, follow')
    }
    
    updateStructuredData()
  }
  
  onMounted(() => {
    initializeSEO()
  })
  
  watch(() => route.fullPath, (newPath) => {
    if (!options.canonical) {
      updateCanonical(newPath)
    }
  })
  
  return {
    updateTitle,
    updateDescription,
    updateKeywords,
    updateImage,
    updateCanonical,
    initializeSEO
  }
}
