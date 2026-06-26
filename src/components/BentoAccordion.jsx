import { useState, useEffect, useRef, useCallback } from 'react'
import { IconBrain, IconZap, IconShield, IconGlobe, IconChart, IconDatabase } from './Icons'
import './BentoAccordion.css'

const FEATURES = [
  {
    id: 0,
    title: 'Autonomous AI Engine',
    tag: 'CORE',
    icon: IconBrain,
    description:
      'A self-learning orchestration engine that continuously refines your data models, detects drift, and re-trains on live signals — no human in the loop required.',
    detail: 'Built on a transformer-based meta-learner that reads your pipeline telemetry and adapts hyperparameters in real time. Supports custom loss functions, federated training, and edge model deployment.',
    span: 'large',
    accent: 'yellow',
  },
  {
    id: 1,
    title: 'Real-Time Stream Processing',
    tag: 'SPEED',
    icon: IconZap,
    description:
      'Ingest millions of events per second with sub-10ms latency across Kafka, Kinesis, Pub/Sub, and webhooks — all through a single unified stream API.',
    detail: 'Windowed aggregations, watermarking, and exactly-once semantics are handled at the engine layer. No Flink configuration required.',
    span: 'small',
    accent: 'orange',
  },
  {
    id: 2,
    title: 'Zero-Trust Security Layer',
    tag: 'SECURITY',
    icon: IconShield,
    description:
      'End-to-end encryption, role-based access control, SOC 2 Type II compliance, and automated secret rotation — built into every pipeline, not bolted on.',
    detail: 'Hardware-backed key management via HSM, mutual TLS on all internal traffic, and audit logs streamed to your SIEM in real time.',
    span: 'small',
    accent: 'teal',
  },
  {
    id: 3,
    title: 'Global Edge Delivery',
    tag: 'SCALE',
    icon: IconGlobe,
    description:
      'Deploy model inference endpoints across 40+ PoPs worldwide. Traffic is routed to the nearest healthy node with <15ms cold start.',
    detail: 'Canary deployments, blue/green switches, and automatic rollback are all built into the edge scheduler. Zero downtime migrations.',
    span: 'small',
    accent: 'yellow',
  },
  {
    id: 4,
    title: 'Predictive Analytics Suite',
    tag: 'INSIGHTS',
    icon: IconChart,
    description:
      'Drag-and-drop dashboards backed by AutoML forecasting. Surface the next 90 days of demand, churn, and revenue in under 60 seconds of setup.',
    detail: 'Blends classical time-series (SARIMA, Prophet) with gradient-boosted ensembles, with automatic model selection scored on held-out CRPS.',
    span: 'small',
    accent: 'orange',
  },
  {
    id: 5,
    title: 'Universal Data Connectors',
    tag: 'INTEGRATIONS',
    icon: IconDatabase,
    description:
      '300+ pre-built connectors to every major SaaS, database, and cloud service. OAuth, API key, and service-account auth modes all supported.',
    detail: 'Schema inference, type coercion, and incremental CDC are all automatic. Connectors are versioned and hot-reloadable without pipeline restarts.',
    span: 'large',
    accent: 'teal',
  },
]

const MOBILE_BREAKPOINT = 768

export default function BentoAccordion() {
  // Shared active index between both layouts
  const [activeIndex, setActiveIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
  )

  // Ref to track which bento node was hovered right before resize
  const hoverRef = useRef(null)
  const resizeTimerRef = useRef(null)

  // Context-transfer: on resize past breakpoint, carry the hover state over
  const handleResize = useCallback(() => {
    clearTimeout(resizeTimerRef.current)
    resizeTimerRef.current = setTimeout(() => {
      const nowMobile = window.innerWidth < MOBILE_BREAKPOINT
      const wasDesktop = !isMobile

      if (wasDesktop && nowMobile && hoverRef.current !== null) {
        // Transfer: open the same accordion panel that was hovered on desktop
        setActiveIndex(hoverRef.current)
      }
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

  // Bento: track hover for context transfer
  const handleBentoEnter = (id) => {
    hoverRef.current = id
    setActiveIndex(id)
  }
  const handleBentoLeave = () => {
    setActiveIndex(null)
    // Keep hoverRef so resize can read it
  }

  // Accordion: toggle open/close
  const handleAccordionToggle = (id) => {
    setActiveIndex(prev => (prev === id ? null : id))
    hoverRef.current = id
  }

  return (
    <section id="features" className="features-section" aria-label="Platform features">
      <div className="container">
        <header className="section-header animate-fade-up">
          <p className="section-eyebrow">Everything you need</p>
          <h2 className="section-title">
            One platform.<br />Every AI workflow.
          </h2>
          <p className="section-sub">
            NeuralOps replaces five point solutions with a single coherent layer — from raw ingestion to deployed model to live dashboard.
          </p>
        </header>

        {/* ── DESKTOP: BENTO GRID ────────────────── */}
        {!isMobile && (
          <div className="bento-grid" role="list" aria-label="Feature grid">
            {FEATURES.map((f) => {
              const Icon = f.icon
              const isActive = activeIndex === f.id
              return (
                <article
                  key={f.id}
                  role="listitem"
                  className={`bento-card bento-card--${f.span} bento-card--${f.accent}${isActive ? ' bento-card--active' : ''}`}
                  onMouseEnter={() => handleBentoEnter(f.id)}
                  onMouseLeave={handleBentoLeave}
                  tabIndex={0}
                  onFocus={() => handleBentoEnter(f.id)}
                  onBlur={handleBentoLeave}
                  aria-label={f.title}
                >
                  <div className="bento-top">
                    <div className={`bento-icon bento-icon--${f.accent}`} aria-hidden="true">
                      <Icon />
                    </div>
                    <span className={`bento-tag bento-tag--${f.accent}`}>{f.tag}</span>
                  </div>
                  <h3 className="bento-title">{f.title}</h3>
                  <p className="bento-desc">{f.description}</p>
                  <div className={`bento-detail${isActive ? ' bento-detail--visible' : ''}`} aria-hidden={!isActive}>
                    <p>{f.detail}</p>
                  </div>
                  <div className={`bento-border bento-border--${f.accent}`} aria-hidden="true" />
                </article>
              )
            })}
          </div>
        )}

        {/* ── MOBILE: ACCORDION ──────────────────── */}
        {isMobile && (
          <div className="accordion" role="list" aria-label="Feature accordion">
            {FEATURES.map((f) => {
              const Icon = f.icon
              const isOpen = activeIndex === f.id
              return (
                <div
                  key={f.id}
                  className={`accordion-item accordion-item--${f.accent}`}
                  role="listitem"
                >
                  <button
                    className={`accordion-trigger${isOpen ? ' accordion-trigger--open' : ''}`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-panel-${f.id}`}
                    id={`accordion-btn-${f.id}`}
                    onClick={() => handleAccordionToggle(f.id)}
                  >
                    <div className="accordion-trigger-left">
                      <div className={`bento-icon bento-icon--${f.accent}`} aria-hidden="true">
                        <Icon />
                      </div>
                      <div className="accordion-trigger-text">
                        <span className={`bento-tag bento-tag--${f.accent}`}>{f.tag}</span>
                        <span className="accordion-title">{f.title}</span>
                      </div>
                    </div>
                    <span className="accordion-chevron" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`accordion-panel-${f.id}`}
                    role="region"
                    aria-labelledby={`accordion-btn-${f.id}`}
                    className={`accordion-panel${isOpen ? ' accordion-panel--open' : ''}`}
                  >
                    <div className="accordion-panel-inner">
                      <p className="bento-desc">{f.description}</p>
                      <p className="accordion-detail">{f.detail}</p>
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
