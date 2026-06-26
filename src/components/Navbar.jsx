import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <nav className="nav-inner container" aria-label="Main navigation">
        <a href="#hero" className="nav-logo" aria-label="NeuralOps home">
          NEURAL<span>OPS</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="list">
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
          <li><a href="#social-proof" onClick={() => setMenuOpen(false)}>Reviews</a></li>
          <li>
            <a href="#pricing" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Get Started
            </a>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </nav>
    </header>
  )
}
