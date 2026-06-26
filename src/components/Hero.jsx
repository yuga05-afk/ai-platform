import './Hero.css'
import { IconArrow, IconZap } from './Icons'

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero">
      {/* Background grid pattern */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Ambient glow orbs */}
      <div className="hero-orb hero-orb--yellow" aria-hidden="true" />
      <div className="hero-orb hero-orb--teal" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-badge animate-fade-up">
          <IconZap />
          <span>AI-Native Data Automation</span>
        </div>

        <h1 className="hero-title animate-fade-up delay-1">
          Automate Everything.<br />
          <span className="hero-title--accent">Ship Faster.</span>
        </h1>

        <p className="hero-subtitle animate-fade-up delay-2">
          NeuralOps wires your data pipelines, models, and workflows into a single
          autonomous intelligence layer — so your team ships insights, not infrastructure.
        </p>

        <div className="hero-actions animate-fade-up delay-3">
          <a href="#pricing" className="btn-primary" aria-label="Start free trial">
            Start Free Trial
            <IconArrow />
          </a>
          <a href="#features" className="btn-ghost">
            See How It Works
          </a>
        </div>

        <div className="hero-stats animate-fade-up delay-4" aria-label="Platform statistics">
          <div className="hero-stat">
            <span className="hero-stat__number">10×</span>
            <span className="hero-stat__label">Faster pipelines</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat__number">99.97%</span>
            <span className="hero-stat__label">Uptime SLA</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat__number">500ms</span>
            <span className="hero-stat__label">Avg. response time</span>
          </div>
        </div>

        {/* Live terminal mockup */}
        <div className="hero-terminal animate-fade-up delay-5" aria-label="Platform preview terminal">
          <div className="terminal-header">
            <div className="terminal-dots" aria-hidden="true">
              <span style={{ background: '#ff5f57' }} />
              <span style={{ background: '#ffc001' }} />
              <span style={{ background: '#29c840' }} />
            </div>
            <span className="terminal-title">neuralops — pipeline.run</span>
          </div>
          <div className="terminal-body" aria-live="polite">
            <p><span className="t-green">✓</span> <span className="t-dim">Connecting to data sources…</span></p>
            <p><span className="t-green">✓</span> <span className="t-dim">AI model loaded <span className="t-yellow">[NeuralCore v4.2]</span></span></p>
            <p><span className="t-green">✓</span> <span className="t-dim">Pipeline orchestrated in <span className="t-yellow">312ms</span></span></p>
            <p><span className="t-green">✓</span> <span className="t-dim">Anomaly detection <span className="t-yellow">ACTIVE</span></span></p>
            <p className="terminal-cursor"><span className="t-yellow">$</span> <span className="cursor-blink">▌</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
