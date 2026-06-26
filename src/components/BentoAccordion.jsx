import { useCallback, useEffect, useRef, useState } from 'react'
import { navigateTo } from '../App'
import { FEATURE_STORIES } from '../data/features'
import { IconArrow, IconCheck } from './Icons'
import './BentoAccordion.css'

const MOBILE_BREAKPOINT = 768

export default function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
  )
  const hoverRef = useRef(0)
  const resizeTimerRef = useRef(null)

  const handleResize = useCallback(() => {
    clearTimeout(resizeTimerRef.current)
    resizeTimerRef.current = setTimeout(() => {
      const nowMobile = window.innerWidth < MOBILE_BREAKPOINT
      if (!isMobile && nowMobile) setActiveIndex(hoverRef.current)
      setIsMobile(nowMobile)
    }, 50)
  }, [isMobile])

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimerRef.current)
    }
  }, [handleResize])

  const setActive = (id) => {
    hoverRef.current = id
    setActiveIndex(id)
  }

  const go = (path) => (event) => {
    event.preventDefault()
    navigateTo(path)
  }

  return (
    <section id="features" className="features-section" aria-label="Platform features">
      <div className="container">
        <header className="section-header animate-fade-up">
          <p className="section-eyebrow">Product system</p>
          <h2 className="section-title">Every workflow gets its own command surface.</h2>
          <p className="section-sub">
            Explore our six core capabilities. Hover to preview, click to dive deeper into each feature.
          </p>
        </header>

        {!isMobile && (
          <div className="bento-grid" role="list" aria-label="Feature grid">
            {FEATURE_STORIES.map((feature, index) => {
              const Icon = feature.icon
              const isActive = activeIndex === index
              return (
                <article
                  key={feature.slug}
                  role="listitem"
                  className={`bento-card bento-card--${feature.accent}${isActive ? ' bento-card--active' : ''}`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  tabIndex={0}
                  aria-label={feature.title}
                >
                  <div className="bento-glow" aria-hidden="true" />
                  <div className="bento-top">
                    <div className={`bento-icon bento-icon--${feature.accent}`} aria-hidden="true">
                      <Icon />
                    </div>
                    <span className={`bento-tag bento-tag--${feature.accent}`}>{feature.tag}</span>
                  </div>
                  <h3 className="bento-title">{feature.title}</h3>
                  <p className="bento-desc">{feature.summary}</p>
                  <div className={`bento-metrics`}>
                    {feature.metrics.map((metric) => (
                      <span key={metric} className="bento-metric">
                        <IconCheck />
                        {metric}
                      </span>
                    ))}
                  </div>
                  <div className={`bento-detail${isActive ? ' bento-detail--visible' : ''}`} aria-hidden={!isActive}>
                    <p>{feature.detail}</p>
                    <a href={`/features/${feature.slug}`} onClick={go(`/features/${feature.slug}`)} className="bento-link">
                      Explore feature
                      <IconArrow />
                    </a>
                  </div>
                  <div className={`bento-border bento-border--${feature.accent}`} aria-hidden="true" />
                </article>
              )
            })}
          </div>
        )}

        {isMobile && (
          <div className="accordion" role="list" aria-label="Feature accordion">
            {FEATURE_STORIES.map((feature, index) => {
              const Icon = feature.icon
              const isOpen = activeIndex === index
              return (
                <div key={feature.slug} className={`accordion-item accordion-item--${feature.accent}`} role="listitem">
                  <button
                    className={`accordion-trigger${isOpen ? ' accordion-trigger--open' : ''}`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-panel-${feature.slug}`}
                    id={`accordion-btn-${feature.slug}`}
                    onClick={() => setActive(isOpen ? -1 : index)}
                  >
                    <div className="accordion-trigger-left">
                      <div className={`bento-icon bento-icon--${feature.accent}`} aria-hidden="true">
                        <Icon />
                      </div>
                      <div className="accordion-trigger-text">
                        <span className={`bento-tag bento-tag--${feature.accent}`}>{feature.tag}</span>
                        <span className="accordion-title">{feature.title}</span>
                      </div>
                    </div>
                    <span className="accordion-chevron" aria-hidden="true">⌄</span>
                  </button>
                  <div
                    id={`accordion-panel-${feature.slug}`}
                    role="region"
                    aria-labelledby={`accordion-btn-${feature.slug}`}
                    className={`accordion-panel${isOpen ? ' accordion-panel--open' : ''}`}
                  >
                    <div className="accordion-panel-inner">
                      <div className="accordion-metrics">
                        {feature.metrics.map((metric) => (
                          <span key={metric} className="bento-metric">
                            <IconCheck />
                            {metric}
                          </span>
                        ))}
                      </div>
                      <p className="bento-desc">{feature.summary}</p>
                      <p className="accordion-detail">{feature.detail}</p>
                      <a href={`/features/${feature.slug}`} onClick={go(`/features/${feature.slug}`)} className="bento-link">
                        Explore feature
                        <IconArrow />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
