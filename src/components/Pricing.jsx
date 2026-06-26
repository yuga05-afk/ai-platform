import { useRef, useState } from 'react'
import { IconArrow, IconCheck } from './Icons'
import './Pricing.css'

const PRICING_MATRIX = {
  tiers: {
    starter: { base_usd: 29 },
    pro: { base_usd: 79 },
    scale: { base_usd: 249 },
  },
  annual_discount: 0.8,
  currency_tariffs: {
    USD: { symbol: '$', rate: 1, locale: 'en-US' },
    INR: { symbol: '₹', rate: 83.5, locale: 'en-IN' },
    EUR: { symbol: '€', rate: 0.92, locale: 'de-DE' },
  },
}

function computePrice(tier, billing, currency) {
  const base = PRICING_MATRIX.tiers[tier].base_usd
  const tariff = PRICING_MATRIX.currency_tariffs[currency]
  const monthly = base * tariff.rate
  const final = billing === 'annual' ? monthly * PRICING_MATRIX.annual_discount : monthly

  return {
    display: Math.round(final).toLocaleString(tariff.locale),
    symbol: tariff.symbol,
  }
}

function PriceNode({ tier, billing, currency }) {
  const { display, symbol } = computePrice(tier, billing, currency)
  return (
    <span className="price-value" aria-live="polite" aria-atomic="true">
      <span className="price-currency">{symbol}</span>
      {display}
    </span>
  )
}

const PLANS = [
  {
    key: 'starter',
    name: 'Starter',
    tagline: 'For students and solo builders',
    cta: 'Start free',
    ctaStyle: 'ghost',
    features: ['5 active pipelines', '1M events per month', '5 AI model calls per day', 'Community support'],
    notIncluded: ['SSO / SAML', 'Dedicated cluster'],
  },
  {
    key: 'pro',
    name: 'Pro',
    tagline: 'For fast-moving product teams',
    cta: 'Start trial',
    ctaStyle: 'primary',
    badge: 'Most Popular',
    features: ['Unlimited pipelines', '50M events per month', '500 AI model calls per day', 'Priority support', '10 custom connectors'],
    notIncluded: ['Custom SLA'],
  },
  {
    key: 'scale',
    name: 'Scale',
    tagline: 'For enterprise automation',
    cta: 'Talk to sales',
    ctaStyle: 'ghost',
    features: ['Unlimited events', 'Unlimited AI model calls', '24/7 support', 'Multi-region cluster', 'SSO / SAML', 'Custom SLA'],
    notIncluded: [],
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const [currency, setCurrency] = useState('USD')
  const billingRef = useRef(billing)
  const currencyRef = useRef(currency)
  billingRef.current = billing
  currencyRef.current = currency

  const handleBilling = (value) => {
    if (billingRef.current !== value) setBilling(value)
  }

  const handleCurrency = (event) => {
    const value = event.target.value
    if (currencyRef.current !== value) setCurrency(value)
  }

  return (
    <section id="pricing" className="pricing-section" aria-label="Pricing plans">
      <div className="container">
        <header className="section-header animate-fade-up">
          <p className="section-eyebrow">Pricing matrix</p>
          <h2 className="section-title">Scale the stack without guessing the bill.</h2>
          <p className="section-sub">
            Currency and billing controls update from one pricing configuration, keeping the interface fast and predictable.
          </p>
        </header>

        <div className="pricing-controls" role="group" aria-label="Pricing controls">
          <div className="billing-toggle" role="group" aria-label="Billing cycle">
            <button
              className={`billing-btn${billing === 'monthly' ? ' billing-btn--active' : ''}`}
              onClick={() => handleBilling('monthly')}
              aria-pressed={billing === 'monthly'}
            >
              Monthly
            </button>
            <button
              className={`billing-btn${billing === 'annual' ? ' billing-btn--active' : ''}`}
              onClick={() => handleBilling('annual')}
              aria-pressed={billing === 'annual'}
            >
              Annual
              <span className="billing-save">{billing === 'annual' ? '20% off' : 'Save 20%'}</span>
            </button>
          </div>

          <div className="currency-switcher">
            <label htmlFor="currency-select" className="currency-label">
              <span className="currency-icon">💱</span>
              Currency
            </label>
            <select id="currency-select" value={currency} onChange={handleCurrency} aria-label="Select currency" className="currency-select">
              <option value="USD">USD ($)</option>
              <option value="INR">INR (₹)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>
        </div>

        <div className="pricing-grid" role="list" aria-label="Pricing plans">
          {PLANS.map((plan) => (
            <article
              key={plan.key}
              className={`pricing-card${plan.badge ? ' pricing-card--featured' : ''}`}
              role="listitem"
              aria-label={`${plan.name} plan`}
            >
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}

              <div className="pricing-header">
                <div className="pricing-icon" aria-hidden="true">
                  {plan.key === 'starter' && '🚀'}
                  {plan.key === 'pro' && '⚡'}
                  {plan.key === 'scale' && '🏢'}
                </div>
                <h3 className="pricing-tier">{plan.name}</h3>
                <p className="pricing-tagline">{plan.tagline}</p>
              </div>

              <div className="pricing-price" aria-label={`Price for ${plan.name} plan`}>
                <PriceNode tier={plan.key} billing={billing} currency={currency} />
                <span className="pricing-period">/ mo{billing === 'annual' ? ', billed annually' : ''}</span>
              </div>

              <a href="/#pricing" className={`pricing-cta pricing-cta--${plan.ctaStyle}`}>
                {plan.cta}
                <IconArrow />
              </a>

              <ul className="pricing-features" aria-label={`${plan.name} plan features`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="pricing-feature pricing-feature--included">
                    <span className="feature-icon feature-icon--yes" aria-hidden="true"><IconCheck /></span>
                    {feature}
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="pricing-feature pricing-feature--excluded">
                    <span className="feature-icon feature-icon--no" aria-hidden="true">−</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pricing-glow" aria-hidden="true" />
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Annual billing is charged as a single payment. Need a custom quote? <a href="/#pricing">Talk to our team</a>.
        </p>
      </div>
    </section>
  )
}
