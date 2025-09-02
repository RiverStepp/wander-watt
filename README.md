# Wander Watt Mobile RV Services (WIP)

Website for Wander Watt Mobile RV Services built with Vue 3, TypeScript, and Tailwind CSS. Includes responsive design, accessibility, SEO features, and a serverless contact form.

![Wander Watt Logo](./src/assets/logo.png)

## Quick Start

```bash
git clone <repository-url>
cd wander-watt
npm install
npm run dev
```

## Features

* Mobile-first design
* Accessibility (WCAG 2.2 AA)
* SEO: meta tags, sitemap, Open Graph
* Contact form with Resend integration
* Fast builds with Vite + TypeScript

## Tech Stack

* Vue 3 + TypeScript
* Vite
* Tailwind CSS
* Vue Router & Pinia
* Resend API for email

## Project Structure

```
src/        # Source code
functions/  # Serverless functions
```

## Development

```bash
npm run dev
npm run build 
npm run preview 
```

## Email Setup

Sign up at [Resend](https://resend.com) and add credentials to `.env`:

```bash
RESEND_API_KEY=your_key
EMAIL_FROM=yourfromemailhere@email.com
EMAIL_TO=yourtoemailhere@email.com
```

## Deployment (Firebase)

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```
2. Log in:

   ```bash
   firebase login
   ```
3. Initialize hosting (first time only):

   ```bash
   firebase init hosting
   ```
4. Build and deploy:

   ```bash
   npm run build
   firebase deploy
   ```
