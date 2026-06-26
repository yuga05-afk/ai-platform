import { useState } from 'react'
import { navigateTo } from '../App'
import { FEATURE_STORIES } from '../data/features'
import { IconArrow, IconZap, IconPlay } from './Icons'
import './Hero.css'

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const go = (path) => (event) => {
    event.preventDefault()
    navigateTo(path)
  }

  const handlePlayDemo = () => {
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 3000)
  }

  return (
    <section id="hero" className="hero" aria-label="Hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-badge animate-fade-up">
            <span className="badge-dot" />
            <IconZap />
            <span>AI-native data automation</span>
          </div>

          <h1 className="hero-title animate-fade-up delay-1">
            Build autonomous data operations that{' '}
            <span className="gradient-text">think, adapt, and ship.</span>
          </h1>

          <p className="hero-subtitle animate-fade-up delay-2">
            NeuralOps turns pipelines, models, approvals, and dashboards into one
            governed automation layer for teams that need speed without chaos.
          </p>

          <div className="hero-actions animate-fade-up delay-3">
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              Start building
              <IconArrow />
            </button>
            <button onClick={handlePlayDemo} className="btn-demo">
              <span className="demo-icon">
                {isPlaying ? '▶' : '▶'}
              </span>
              Watch demo
            </button>
          </div>

          <div className="hero-stats animate-fade-up delay-4">
            <div className="stat">
              <strong className="stat-number">10x</strong>
              <span className="stat-label">Faster deployment</span>
            </div>
            <div className="stat">
              <strong className="stat-number">99.9%</strong>
              <span className="stat-label">Uptime SLA</span>
            </div>
            <div className="stat">
              <strong className="stat-number">500+</strong>
              <span className="stat-label">Enterprise clients</span>
            </div>
          </div>
        </div>

        <div className="hero-stage animate-fade-up delay-5" aria-label="NeuralOps platform preview">
          <div className="stage-rail stage-rail--left" aria-hidden="true" />
          <div className="stage-rail stage-rail--right" aria-hidden="true" />

          <div className="stage-core">
            <div className="stage-sphere" aria-hidden="true">
              <div className="sphere-ring" />
              <div className="sphere-ring sphere-ring--inner" />
              <span className="sphere-text">N</span>
            </div>
            <div className="stage-terminal">
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot--red" />
                <span className="terminal-dot terminal-dot--yellow" />
                <span className="terminal-dot terminal-dot--green" />
              </div>
              <div className="terminal-body">
                <div className="terminal-row terminal-row--muted">$ neuralops init --project=revenue-pipeline</div>
                <div className="terminal-row terminal-row--success">✓ Connected to data warehouse</div>
                <div className="terminal-row terminal-row--info">→ Analyzing 2.4M records...</div>
                <div className="terminal-command">
                  <span className="prompt">❯</span>
                  <strong>pipeline.run</strong>
                  <em className="cursor">_</em>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-feature-strip" role="list" aria-label="Featured workflows">
            {FEATURE_STORIES.slice(0, 4).map((feature, idx) => {
              const Icon = feature.icon
              return (
                <a
                  href={`/features/${feature.slug}`}
                  onClick={go(`/features/${feature.slug}`)}
                  className={`hero-feature hero-feature--${feature.accent} animate-fade-up`}
                  style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                  role="listitem"
                  key={feature.slug}
                >
                  <div className="feature-icon-wrapper">
                    <Icon />
                  </div>
                  <div className="feature-content">
                    <span>{feature.tag}</span>
                    <strong>{feature.title}</strong>
                  </div>
                  <div className="feature-arrow">→</div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
