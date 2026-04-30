import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { MotionConfig } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCTA } from '@/components/layout/MobileCTA'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { CookieBanner } from '@/components/cookies/CookieBanner'
import { HomePage } from '@/pages/HomePage'
import { ProdusePage } from '@/pages/ProdusePage'
import { ProductDetailPage } from '@/pages/ProductDetailPage'
import { DespreNoiPage } from '@/pages/DespreNoiPage'
import { ContactPage } from '@/pages/ContactPage'
import { PoliticaConfidentialitate } from '@/pages/PoliticaConfidentialitate'
import { TermeniConditii } from '@/pages/TermeniConditii'
import { PoliticaCookies } from '@/pages/PoliticaCookies'
import { SetariCookie } from '@/pages/SetariCookie'
import { initConsentBasedAnalytics } from '@/utils/analytics'

export default function App() {
  useEffect(() => {
    initConsentBasedAnalytics()
  }, [])

  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pb-14 lg:pb-0">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/produse" element={<ProdusePage />} />
                <Route path="/produse/:slug" element={<ProductDetailPage />} />
                <Route path="/despre-noi" element={<DespreNoiPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
                <Route path="/termeni-conditii" element={<TermeniConditii />} />
                <Route path="/politica-cookies" element={<PoliticaCookies />} />
                <Route path="/setari-cookie" element={<SetariCookie />} />
              </Routes>
            </main>
            <Footer />
            <MobileCTA />
          </div>
          <CookieBanner />
        </BrowserRouter>
      </MotionConfig>
    </HelmetProvider>
  )
}
