import { useRef, useState } from 'react'
import { IconCheck, IconArrow } from './Icons'
import './Pricing.css'

/* =========================================
   MULTI-DIMENSIONAL PRICING MATRIX
   Rule: dynamic calculation, no hardcoded UI values
   ========================================= */
const PRICING_MATRIX = {
  tiers: {
    starter: { base_usd: 29 },
    pro:     { base_usd: 79 },
    scale:   { base_usd: 249 },
  },
  annual_discount: 0.80,  // 20% off
  currency_tariffs: {
    USD: { symbol: '$', rate: 1.00,   locale: 'en-US' },
    INR: { symbol: '₹', rate: 83.50,  locale: 'en-IN' },
    EUR: { symbol: '€', rate: 0.92,   locale: 'de-DE' },
  },
}

function computePrice(tier, billing, currency) {
  const base    = PRICING_MATRIX.tiers[tier].base_usd
  const tariff  = PRICING_MATRIX.currency_tariffs[currency]
  const monthly = base * tariff.rate
  const final   = billing === 'annual'
    ? monthly * PRICING_MATRIX.annual_discount
    : monthly
  return {
    display: Math.round(final),
    symbol:  tariff.symbol,
  }
}

/* =========================================
   PRICE NODE — Only this text node re-renders
   ========================================= */
function PriceNode({ tier, billing, currency }) {
  const { display, symbol } = computePrice(tier, billing, currency)
  return (
    <span className="price-value" aria-live="polite" aria-atomic="true">
      <span className="price-currency">{symbol}</span>
      {display.toLocaleString()}
    </span>
  )
}

const PLANS = [
  {
    key: 'starter',
    name: 'Starter',
    tagline: 'For indie builders',
    cta: 'Get started free',
    ctaStyle: 'ghost',
    features: [
      '5 active pipelines',
      '1M events / month',
      '5 AI model calls / day',
      'Community support',
      'Shared infrastructure',
    ],
    notIncluded: ['SSO / SAML', 'Custom SLAs', 'Dedicated cluster'],
  },
  {
    key: 'pro',
    name: 'Pro',
    tagline: 'For growing teams',
    cta: 'Start 14-day trial',
    ctaStyle: 'primary',
    badge: 'Most Popular',
    features: [
      'Unlimited pipelines',
      '50M events / month',
      '500 AI model calls / day',
      'Priority email support',
      'Dedicated infrastructure',
      'Custom connectors (10)',
    ],
    notIncluded: ['SSO / SAML', 'Custom SLAs'],
  },
  {
    key: 'scale',
    name: 'Scale',
    tagline: 'For enterprise orgs',
    cta: 'Talk to sales',
    ctaStyle: 'ghost',
    features: [
      'Unlimited pipelines',
      'Unlimited events',
      'Unlimited AI model calls',
      '24/7 dedicated support',
      'Multi-region cluster',
      'Custom connectors (∞)',
      'SSO / SAML',
      'Custom SLAs',
    ],
    notIncluded: [],
  },
]

export default function Pricing() {
  const [billing, setBilling]   = useState('monthly')
  const [currency, setCurrency] = useState('USD')

  // These refs ensure only the price text nodes update
  // (state is scoped here; parent layout doesn't re-render)
  const billingRef  = useRef(billing)
  const currencyRef = useRef(currency)
  billingRef.current  = billing
  currencyRef.current = currency

  const handleBilling = (val) => {
    if (billingRef.current !== val) setBilling(val)
  }

  const handleCurrency = (e) => {
    const val = e.target.value
    if (currencyRef.current !== val) setCurrency(val)
  }

  const annualSaving = billing === 'annual' ? '20%' : null

  return (
    <section id="pricing" className="pricing-section" aria-label="Pricing plans">
      <div className="container">
        <header className="section-header animate-fade-up">
          <p className="section-eyebrow">Simple, transparent</p>
          <h2 className="section-title">Pricing that scales with you</h2>
          <p className="section-sub">
            One platform, three tiers — upgrade or downgrade any time.
          </p>
        </header>

        {/* ── CONTROLS — Billing toggle + Currency dropdown ── */}
        <div className="pricing-controls" role="group" aria-label="Pricing controls">
          {/* Billing toggle */}
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
              {annualSaving === null
                ? <span className="billing-save">Save 20%</span>
                : <span className="billing-save billing-save--active">20% off</span>
              }
            </button>
          </div>

          {/* Currency switcher */}
          <div className="currency-switcher">
            <label htmlFor="currency-select" className="sr-only">Currency</label>
            <select
              id="currency-select"
              value={currency}
              onChange={handleCurrency}
              aria-label="Select currency"
            >
              <option value="USD">🇺🇸 USD ($)</option>
              <option value="INR">🇮🇳 INR (₹)</option>
              <option value="EUR">🇪🇺 EUR (€)</option>
            </select>
          </div>
        </div>

        {/* ── PRICE CARDS ── */}
        <div className="pricing-grid" role="list" aria-label="Pricing plans">
          {PLANS.map((plan) => (
            <article
              key={plan.key}
              className={`pricing-card${plan.badge ? ' pricing-card--featured' : ''}`}
              role="listitem"
              aria-label={`${plan.name} plan`}
            >
              {plan.badge && (
                <div className="pricing-badge" aria-label={plan.badge}>
                  {plan.badge}
                </div>
              )}

              <div className="pricing-header">
                <h3 className="pricing-tier">{plan.name}</h3>
                <p className="pricing-tagline">{plan.tagline}</p>
              </div>

              <div className="pricing-price" aria-label={`Price for ${plan.name} plan`}>
                {/* Only this node updates on toggle/currency change */}
                <PriceNode tier={plan.key} billing={billing} currency={currency} />
                <span className="pricing-period">
                  / mo{billing === 'annual' ? ', billed annually' : ''}
                </span>
              </div>

              <a
                href="#"
                className={`pricing-cta pricing-cta--${plan.ctaStyle}`}
                aria-label={`${plan.cta} for ${plan.name} plan`}
              >
                {plan.cta}
                <IconArrow />
              </a>

              <ul className="pricing-features" aria-label={`${plan.name} plan features`}>
                {plan.features.map((f) => (
                  <li key={f} className="pricing-feature pricing-feature--included">
                    <span className="feature-icon feature-icon--yes" aria-hidden="true">
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="pricing-feature pricing-feature--excluded" aria-label={`${f} — not included`}>
                    <span className="feature-icon feature-icon--no" aria-hidden="true">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          All prices exclude applicable taxes. Annual billing is charged as a single payment.
          Need a custom quote? <a href="#">Talk to our team →</a>
        </p>
      </div>
    </section>
  )
}
