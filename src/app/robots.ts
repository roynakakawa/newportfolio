import type { MetadataRoute } from 'next'
import { metaData } from './data'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${metaData.baseUrl}/sitemap.xml`,
  }
}