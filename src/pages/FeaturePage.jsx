import { useEffect, useState } from 'react'
import { navigateTo } from '../App'
import { FEATURE_STORIES, featureBySlug } from '../data/features'
import { IconArrow, IconCheck, IconZap } from '../components/Icons'
import './FeaturePage.css'

export default function FeaturePage({ slug }) {
  const feature = featureBySlug(slug)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (!feature) {
    navigateTo('/')
    return null
  }

  const Icon = feature.icon

  const go = (path) => (event) => {
    event.preventDefault()
    navigateTo(path)
  }

  const relatedFeatures = FEATURE_STORIES.filter((item) => item.slug !== feature.slug).slice(0, 4)

  return (
    <section className="feature-page" aria-labelledby="feature-page-title">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/" onClick={go('/')}>Home</a>
          <span className="breadcrumb-separator">/</span>
          <a href="/#features">Features</a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{feature.title}</span>
        </nav>

        <div className="feature-page-inner">
          <div className="feature-page-copy animate-fade-up">
            <div className="feature-badge">
              <span className={`badge-accent ${feature.accent}`} />
              <span className="badge-text">{feature.tag}</span>
            </div>

            <h1 id="feature-page-title" className="feature-title">
              {feature.title}
            </h1>

            <p className="feature-lede">{feature.summary}</p>
            <p className="feature-body">{feature.detail}</p>

            <div className="feature-tabs" role="tablist">
              <button 
                className={`feature-tab${activeTab === 'overview' ? ' active' : ''}`}
                onClick={() => setActiveTab('overview')}
                role="tab"
                aria-selected={activeTab === 'overview'}
              >
                Overview
              </button>
              <button 
                className={`feature-tab${activeTab === 'metrics' ? ' active' : ''}`}
                onClick={() => setActiveTab('metrics')}
                role="tab"
                aria-selected={activeTab === 'metrics'}
              >
                Metrics
              </button>
              <button 
                className={`feature-tab${activeTab === 'use-cases' ? ' active' : ''}`}
                onClick={() => setActiveTab('use-cases')}
                role="tab"
                aria-selected={activeTab === 'use-cases'}
              >
                Use Cases
              </button>
            </div>

            <div className="feature-tab-content">
              {activeTab === 'overview' && (
                <div className="tab-panel animate-fade-in">
                  <p className="feature-description">
                    {feature.detail}
                  </p>
                  <ul className="feature-highlights">
                    <li><IconCheck /> Enterprise-grade reliability</li>
                    <li><IconCheck /> Real-time monitoring</li>
                    <li><IconCheck /> Seamless integrations</li>
                  </ul>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="tab-panel animate-fade-in">
                  <div className="metrics-grid">
                    {feature.metrics.map((metric) => (
                      <div key={metric} className={`metric-card metric-card--${feature.accent}`}>
                        <IconZap />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'use-cases' && (
                <div className="tab-panel animate-fade-in">
                  <div className="use-cases-list">
                    <div className="use-case">
                      <h4>Production Workflows</h4>
                      <p>Deploy and scale automated pipelines with zero downtime.</p>
                    </div>
                    <div className="use-case">
                      <h4>Data Governance</h4>
                      <p>Maintain compliance and audit trails across all operations.</p>
                    </div>
                    <div className="use-case">
                      <h4>Real-time Analytics</h4>
                      <p>Monitor performance metrics and optimize resource allocation.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="feature-actions">
              <a href="/#pricing" className="btn-primary">
                Start building
                <IconArrow />
              </a>
              <a href="/#features" onClick={go('/#features')} className="btn-ghost">
                View all features
              </a>
            </div>
          </div>

          <div className={`feature-console feature-console--${feature.accent} animate-fade-up delay-2`} aria-label={`${feature.title} interface preview`}>
            <div className="console-top">
              <span className="console-dot console-dot--red" />
              <span className="console-dot console-dot--yellow" />
              <span className="console-dot console-dot--green" />
              <strong className="console-title">{feature.tag.toLowerCase()}.ops</strong>
            </div>
            <div className="console-body">
              <div className="console-emblem" aria-hidden="true">
                <Icon />
              </div>
              <div className="console-metrics">
                {feature.metrics.map((metric) => (
                  <div className="console-metric" key={metric}>
                    <IconCheck />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
              <div className="console-preview">
                <div className="preview-line" />
                <div className="preview-line preview-line--short" />
                <div className="preview-line preview-line--medium" />
              </div>
            </div>
            <div className="console-glow" aria-hidden="true" />
          </div>
        </div>

        <div className="related-section animate-fade-up delay-3">
          <h3 className="related-heading">Explore other features</h3>
          <div className="related-grid">
            {relatedFeatures.map((item) => {
              const ItemIcon = item.icon
              return (
                <a
                  href={`/features/${item.slug}`}
                  onClick={go(`/features/${item.slug}`)}
                  key={item.slug}
                  className={`related-card related-card--${item.accent}`}
                >
                  <div className="related-icon">
                    <ItemIcon />
                  </div>
                  <div className="related-content">
                    <span className="related-tag">{item.tag}</span>
                    <h4 className="related-title">{item.title}</h4>
                  </div>
                  <div className="related-arrow">→</div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
