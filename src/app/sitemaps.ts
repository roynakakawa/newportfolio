import type { MetadataRoute } from 'next'
import { metaData } from './data'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: metaData.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${metaData.baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${metaData.baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}