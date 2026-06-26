import { IconStar } from './Icons'
import './SocialProof.css'

const TESTIMONIALS = [
  {
    name: 'Priya Nair',
    role: 'Head of Data Engineering',
    company: 'Swiggy',
    avatar: 'PN',
    quote: 'NeuralOps turned a three-week pipeline migration into a two-day launch. The canvas made every dependency visible.',
    metric: '3x faster deployment',
  },
  {
    name: 'Marcus Webb',
    role: 'CTO',
    company: 'Synthetix Labs',
    avatar: 'MW',
    quote: 'The autonomous recovery loop is the difference between a dashboard and a real operations platform.',
    metric: '99.99% uptime',
  },
  {
    name: 'Leila Farouk',
    role: 'VP Engineering',
    company: 'Razorpay',
    avatar: 'LF',
    quote: 'Security review passed quickly because controls are part of every workflow, not an afterthought.',
    metric: 'SOC 2 certified',
  },
]

const LOGOS = ['Swiggy', 'Razorpay', 'Zepto', 'Grab', 'PhonePe', 'TradeSpark', 'CRED', 'Zomato']

const STATS = [
  { value: '500+', label: 'Enterprise clients' },
  { value: '10M+', label: 'Pipelines executed' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '40+', label: 'Global regions' },
]

export default function SocialProof() {
  return (
    <section id="social-proof" className="social-section" aria-label="Customer testimonials">
      <div className="container">
        <header className="section-header animate-fade-up">
          <p className="section-eyebrow">Social proof</p>
          <h2 className="section-title">Trusted by teams that need data to move.</h2>
          <p className="section-sub">
            Join thousands of engineers who ship faster with NeuralOps
          </p>
        </header>

        <div className="stats-strip animate-fade-up delay-1" aria-label="Platform statistics">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong className="stat-value">{stat.value}</strong>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="logo-strip animate-fade-up delay-2" aria-label="Partner companies">
          {LOGOS.map((logo) => (
            <div key={logo} className="logo-item">
              <span className="logo-text">{logo}</span>
            </div>
          ))}
        </div>

        <div className="testimonials-grid" role="list" aria-label="Customer testimonials">
          {TESTIMONIALS.map((testimonial, idx) => (
            <blockquote 
              key={testimonial.name} 
              className="testimonial-card animate-fade-up" 
              role="listitem"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="testimonial-header">
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <IconStar key={index} />
                  ))}
                </div>
                <div className="testimonial-metric">
                  <span className="metric-badge">{testimonial.metric}</span>
                </div>
              </div>
              
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              
              <footer className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  <span>{testimonial.avatar}</span>
                </div>
                <div className="testimonial-info">
                  <cite className="testimonial-name">{testimonial.name}</cite>
                  <p className="testimonial-role">{testimonial.role} at {testimonial.company}</p>
                </div>
              </footer>
              
              <div className="testimonial-glow" aria-hidden="true" />
            </blockquote>
          ))}
        </div>

        <div className="cta-strip animate-fade-up delay-3">
          <p className="cta-text">Ready to transform your data operations?</p>
          <button 
            className="btn-primary btn-large"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get started today
            <IconStar />
          </button>
        </div>
      </div>
    </section>
  )
}
