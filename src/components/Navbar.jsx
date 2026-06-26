import { useEffect, useState } from 'react'
import { navigateTo } from '../App'
import { FEATURE_STORIES } from '../data/features'
import './Navbar.css'

export default function Navbar({ currentPath }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (path) => (event) => {
    event.preventDefault()
    setMenuOpen(false)
    setActiveDropdown(null)
    navigateTo(path)
  }

  const toggleDropdown = (slug) => (event) => {
    event.preventDefault()
    setActiveDropdown(activeDropdown === slug ? null : slug)
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <nav className="nav-inner container" aria-label="Main navigation">
        <a href="/" onClick={go('/')} className="nav-logo" aria-label="NeuralOps home">
          <span className="nav-mark" aria-hidden="true">N</span>
          <span className="nav-logo-text">NeuralOps</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="list">
          <li><a className={currentPath === '/' ? 'active' : ''} href="/" onClick={go('/')}>Home</a></li>
          
          <li className="nav-dropdown">
            <button 
              className={`nav-dropdown-toggle${activeDropdown === 'features' ? ' active' : ''}`}
              onClick={toggleDropdown('features')}
              aria-expanded={activeDropdown === 'features'}
            >
              Features
              <span className="dropdown-arrow">▼</span>
            </button>
            <ul className={`dropdown-menu${activeDropdown === 'features' ? ' open' : ''}`} role="menu">
              {FEATURE_STORIES.slice(0, 4).map((feature) => {
                const path = `/features/${feature.slug}`
                return (
                  <li key={feature.slug} role="none">
                    <a 
                      href={path} 
                      onClick={go(path)}
                      className={currentPath === path ? 'active' : ''}
                      role="menuitem"
                    >
                      <span className={`dropdown-icon ${feature.accent}`}>
                        <feature.icon />
                      </span>
                      <div className="dropdown-content">
                        <strong>{feature.title}</strong>
                        <span>{feature.tag}</span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </li>
          
          <li><a href="/#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
          <li>
            <a href="/#pricing" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Get Started
            </a>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </nav>
    </header>
  )
}
