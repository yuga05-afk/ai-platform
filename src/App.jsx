import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackdrop from './components/AnimatedBackdrop'
import Home from './pages/Home'
import FeaturePage from './pages/FeaturePage'

function useCurrentPath() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handleNavigate = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handleNavigate)
    window.addEventListener('app:navigate', handleNavigate)
    return () => {
      window.removeEventListener('popstate', handleNavigate)
      window.removeEventListener('app:navigate', handleNavigate)
    }
  }, [])

  return path
}

export function navigateTo(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new Event('app:navigate'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const path = useCurrentPath()
  const slug = path.startsWith('/features/') ? path.replace('/features/', '') : null

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />

      <div className={loaded ? 'animate-fade-in' : ''} style={{ opacity: loaded ? 1 : 0 }}>
        <AnimatedBackdrop />
        <Navbar currentPath={path} />

        <main id="main-content" tabIndex={-1}>
          {slug ? <FeaturePage slug={slug} /> : <Home />}
        </main>

        <Footer />
      </div>
    </>
  )
}
