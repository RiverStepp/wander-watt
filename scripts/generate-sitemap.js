import { writeFileSync } from 'fs'
import { siteConfig } from '../src/config/site.js'

const baseURL = siteConfig.url

const routes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/services',
    changefreq: 'monthly', 
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/about',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/contact',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/blog',
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  }
]

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseURL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  writeFileSync('public/sitemap.xml', sitemap)
  
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseURL}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`

  writeFileSync('public/sitemap-index.xml', sitemapIndex)
}

const generateRobotsTxt = () => {
  const robots = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /_internal/
Disallow: /api/
Disallow: /functions/

# Allow important files
Allow: /sitemap.xml
Allow: /favicon.ico
Allow: /favicon.svg

# Sitemap location
Sitemap: ${baseURL}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`

  writeFileSync('public/robots.txt', robots)
}

generateSitemap()
generateRobotsTxt()
