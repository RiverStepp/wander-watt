// NOTE: If you wish to use this website for your own purposes, this is the file you will want to update. 

export const siteConfig = {
  name: 'Wander Watt Mobile RV Services',
  domain: 'gowanderwatt.com',
  url: 'https://gowanderwatt.com',
  description: 'Mobile RV Repair, Solar & Roof Services. RVTI-Certified Technician with 10+ years experience. We bring the power to you across the United States.',
  
  // Contact Information
  contact: {
    phone: '(555) 555-1234',
    email: 'info@gowanderwatt.com',
    serviceArea: 'United States',
    address: {
      street: '123 Mobile Service Blvd',
      city: 'Anywhere',
      state: 'US',
      zip: '12345'
    }
  },
  
  // Business Information
  business: {
    owner: 'John Stepp',
    established: 2025,
    specialties: [
      'RVTI-Certified Technician & Inspector Services',
      'RV Armor Roof Installation & Maintenance', 
      'Solar & Battery Upgrades',
      'Electrical Diagnostics & Repair',
      'HVAC Service & Troubleshooting',
      'Sealant, Plumbing, and Pre-Trip Inspections'
    ],
    certifications: [
      'RVTI Level 1 & 2 Technician & Inspector',
      'RV Armor Certified Installer',
      'Universal EPA Refrigerant License',
      '10+ Years Commercial Electrician'
    ]
  },
  
  seo: {
    keywords: 'RV repair, mobile RV service, RV solar installation, RV roof repair, RVTI certified, RV electrical repair, RV HVAC service',
    author: 'John Stepp',
    twitterHandle: '@wanderwatt'
  },
  
  social: {
    facebook: 'https://facebook.com/wanderwatt',
    instagram: 'https://instagram.com/wanderwatt', 
    youtube: 'https://youtube.com/@wanderwatt',
    linkedin: 'https://linkedin.com/company/wanderwatt'
  }
} as const

export type SiteConfig = typeof siteConfig
