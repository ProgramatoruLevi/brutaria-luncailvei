import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'

interface SEOHeadProps {
  title?: string
  description?: string
  path?: string
  ogImage?: string
  type?: string
}

export function SEOHead({ title, description, path = '/', ogImage, type = 'website' }: SEOHeadProps) {
  const fullTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.seo.title
  const desc = description || siteConfig.seo.description
  const url = `${siteConfig.url}${path}`
  const image = ogImage || siteConfig.seo.ogImage

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
