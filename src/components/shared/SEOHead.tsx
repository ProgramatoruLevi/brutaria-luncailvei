import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'

interface SEOHeadProps {
  title?: string
  description?: string
  path?: string
  ogImage?: string
  type?: string
  noIndex?: boolean
}

export function SEOHead({
  title,
  description,
  path = '/',
  ogImage,
  type = 'website',
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.seo.title
  const desc = description || siteConfig.seo.description
  const url = `${siteConfig.url}${path}`
  const image = ogImage || siteConfig.seo.ogImage
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={siteConfig.name} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="ro_RO" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
