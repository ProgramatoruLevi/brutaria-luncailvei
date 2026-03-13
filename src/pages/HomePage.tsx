import { Hero } from '@/components/home/Hero'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { SeasonalProducts } from '@/components/home/SeasonalProducts'
import { AboutPreview } from '@/components/home/AboutPreview'
import { ProcessSection } from '@/components/home/ProcessSection'
import { Gallery } from '@/components/home/Gallery'
import { ContactCTA } from '@/components/home/ContactCTA'
import { ContactPreview } from '@/components/home/ContactPreview'
import { SEOHead } from '@/components/shared/SEOHead'
import { LocalBusinessSchema } from '@/components/shared/StructuredData'

export function HomePage() {
  return (
    <>
      <SEOHead path="/" />
      <LocalBusinessSchema />
      <Hero />
      <FeaturedProducts />
      <SeasonalProducts />
      <AboutPreview />
      <ProcessSection />
      <Gallery />
      <ContactCTA />
      <ContactPreview />
    </>
  )
}
