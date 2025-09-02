import { z } from 'zod'

// Validation schema for the contact form
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  rigType: z.string().min(1, 'Please select your RV type'),
  location: z.string().min(3, 'Please enter your city and state'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  serviceCategory: z.string().min(1, 'Please select a service category'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

interface NetlifyEvent {
  httpMethod: string
  body: string | null
  headers: Record<string, string>
}

interface NetlifyContext {
    
}

interface NetlifyResponse {
  statusCode: number
  body: string
  headers?: Record<string, string>
}

export const handler = async (event: NetlifyEvent, context: NetlifyContext): Promise<NetlifyResponse> => {
  // TODO: Make sure this is sufficient
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  }

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        ok: false, 
        message: 'Method not allowed. Only POST requests are accepted.' 
      })
    }
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          ok: false, 
          message: 'Request body is required' 
        })
      }
    }

    const data = JSON.parse(event.body)

    const validationResult = contactSchema.safeParse(data)
    if (!validationResult.success) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          ok: false, 
          message: 'Validation failed',
          errors: validationResult.error.errors 
        })
      }
    }

    const formData = validationResult.data

    // TODO: Actually hook this up properly
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const EMAIL_TO = process.env.EMAIL_TO || 'info@gowanderwatt.com'
    const EMAIL_FROM = process.env.EMAIL_FROM || 'contact@gowanderwatt.com'

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set')
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          ok: false, 
          message: 'Email service configuration error' 
        })
      }
    }

    const emailSubject = `New RV Service Request from ${formData.name}`
    const emailHtml = `
      <h2>New RV Service Request</h2>
      
      <h3>Customer Information</h3>
      <ul>
        <li><strong>Name:</strong> ${formData.name}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
        <li><strong>Location:</strong> ${formData.location}</li>
      </ul>
      
      <h3>RV Information</h3>
      <ul>
        <li><strong>RV Type:</strong> ${formData.rigType}</li>
        <li><strong>Preferred Date:</strong> ${formData.preferredDate}</li>
        <li><strong>Service Category:</strong> ${formData.serviceCategory}</li>
      </ul>
      
      <h3>Message</h3>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><small>This request was submitted via the Wander Watt website contact form.</small></p>
    `

    const emailText = `
New RV Service Request

Customer Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Location: ${formData.location}

RV Information:
- RV Type: ${formData.rigType}
- Preferred Date: ${formData.preferredDate}
- Service Category: ${formData.serviceCategory}

Message:
${formData.message}

---
This request was submitted via the Wander Watt website contact form.
    `

    const emailPayload = {
      from: EMAIL_FROM,
      to: [EMAIL_TO],
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
      reply_to: formData.email
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Resend API error:', response.status, errorData)
      
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          ok: false, 
          message: 'Failed to send email. Please try again or contact us directly.' 
        })
      }
    }

    const result = await response.json()
    console.log('Email sent successfully:', result.id)

    try {
      // TODO: Do better logging in both the try and the catch
      console.log('Contact form submission logged:', {
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        serviceCategory: formData.serviceCategory,
        location: formData.location
      })
    } catch (logError) {
      console.error('Failed to log submission:', logError)
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        ok: true, 
        message: 'Email sent successfully! We will contact you within 24 hours.' 
      })
    }

  } catch (error) {
    console.error('Error processing contact form:', error)
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        ok: false, 
        message: 'An unexpected error occurred. Please try again or contact us directly.' 
      })
    }
  }
}

/*
export default async function handler(req: any, res: any) {
  const event = {
    httpMethod: req.method,
    body: req.body ? JSON.stringify(req.body) : null,
    headers: req.headers
  }

  const result = await exports.handler(event, {})
  
  res.status(result.statusCode)
  if (result.headers) {
    Object.entries(result.headers).forEach(([key, value]) => {
      res.setHeader(key, value)
    })
  }
  res.json(JSON.parse(result.body))
}*/
