import { lazy, Suspense, useState } from 'react'
import KnotentLoader from './KnotentLoader.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PageWrapper from './components/PageWrapper.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import OurClients from './pages/OurClients.jsx'
import Contact from './pages/Contact.jsx'
import BrandPartnerships from './pages/BrandPartnerships.jsx'
import BrandStrategy from './pages/BrandStrategy.jsx'
import EventActivations from './pages/EventActivations.jsx'
import PRMedia from './pages/PRMedia.jsx'
import SocialInfluencer from './pages/SocialInfluencer.jsx'
import TalentManagement from './pages/TalentManagement.jsx'

const Background3D = lazy(() => import('./components/Background3D.jsx'))

import { ReactLenis } from 'lenis/react'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <KnotentLoader onComplete={() => setLoading(false)} />}
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
        <div className="app">
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/services/talent-management" element={<PageWrapper><TalentManagement /></PageWrapper>} />
              <Route path="/services/brand-partnerships" element={<PageWrapper><BrandPartnerships /></PageWrapper>} />
              <Route path="/services/pr-media" element={<PageWrapper><PRMedia /></PageWrapper>} />
              <Route path="/services/event-activations" element={<PageWrapper><EventActivations /></PageWrapper>} />
              <Route path="/services/social-influencer" element={<PageWrapper><SocialInfluencer /></PageWrapper>} />
              <Route path="/services/brand-strategy" element={<PageWrapper><BrandStrategy /></PageWrapper>} />
              <Route path="/clients" element={<PageWrapper><OurClients /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ReactLenis>
    </>
  )
}

export default App
