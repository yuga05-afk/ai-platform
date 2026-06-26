import { IconStar } from './Icons'
import './SocialProof.css'

const TESTIMONIALS = [
  {
    name: 'Priya Nair',
    role: 'Head of Data Engineering, Swiggy',
    avatar: 'PN',
    stars: 5,
    quote:
      'NeuralOps cut our pipeline build time from 3 weeks to 2 days. The bento of connectors is insane — we plugged in our Kafka topics and Snowflake warehouse in under an hour.',
  },
  {
    name: 'Marcus Webb',
    role: 'CTO, Synthetix Labs',
    avatar: 'MW',
    stars: 5,
    quote:
      'The autonomous retraining loop is genuinely magical. Our fraud model used to drift every quarter. Now it self-corrects weekly and we have not had a false-positive spike in 8 months.',
  },
  {
    name: 'Leila Farouk',
    role: 'VP Engineering, TradeSpark',
    avatar: 'LF',
    stars: 5,
    quote:
      'We benchmarked NeuralOps against three enterprise platforms. It beat all of them on latency and came in at a third of the cost. Security audit was clean on first pass.',
  },
  {
    name: 'Rohan Mehta',
    role: 'Principal ML Engineer, Zepto',
    avatar: 'RM',
    stars: 5,
    quote:
      "Finally a platform where the AI layer isn't just a checkbox. The NeuralCore model actually understands our schema and suggests transformations I wouldn't have thought of.",
  },
  {
    name: 'Sophie Chen',
    role: 'Data Science Lead, Grab',
    avatar: 'SC',
    stars: 5,
    quote:
      'Migrated 200+ pipelines from Airflow in a weekend. The zero-trust layer meant our security team approved it in a single review. This is what modern data infra should feel like.',
  },
  {
    name: 'Daniel Osei',
    role: 'Engineering Manager, M-Pesa',
    avatar: 'DO',
    stars: 5,
    quote:
      'Global edge delivery is not a gimmick — our inference latency in Nairobi dropped from 340ms to 18ms. That change alone justified the cost within the first week.',
  },
]

const LOGOS = [
  'Swiggy', 'Synthetix', 'TradeSpark', 'Zepto', 'Grab', 'M-Pesa', 'Razorpay', 'PhonePe',
]

export default function SocialProof() {
  return (
    <section id="social-proof" className="social-section" aria-label="Customer testimonials">
      <div className="container">
        <header className="section-header animate-fade-up">
          <p className="section-eyebrow">Trusted by builders</p>
          <h2 className="section-title">
            Teams that ship fast<br />use NeuralOps
          </h2>
        </header>

        {/* Logo strip */}
        <div className="logo-strip animate-fade-up delay-1" aria-label="Partner companies">
          {LOGOS.map((logo) => (
            <span key={logo} className="logo-item">{logo}</span>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="testimonials-grid" role="list" aria-label="Customer testimonials">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="testimonial-card"
              role="listitem"
              cite="#"
            >
              <div className="testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <IconStar key={i} />
                ))}
              </div>
              <p className="testimonial-quote">{t.quote}</p>
              <footer className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {t.avatar}
                </div>
                <div>
                  <cite className="testimonial-name">{t.name}</cite>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
