import { useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BentoAccordion from './components/BentoAccordion'
import Pricing from './components/Pricing'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Loader — dismisses within 500ms per rules */}
      <Loader onDone={() => setLoaded(true)} />

      {/* Main page — semantic HTML structure */}
      <div className={loaded ? 'animate-fade-in' : ''} style={{ opacity: loaded ? 1 : 0 }}>
        <Navbar />

        <main id="main-content" tabIndex={-1}>
          <Hero />
          <BentoAccordion />
          <Pricing />
          <SocialProof />
        </main>

        <Footer />
      </div>
    </>
  )
}
