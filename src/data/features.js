import {
  IconApi,
  IconBrain,
  IconChart,
  IconDatabase,
  IconGlobe,
  IconShield,
  IconZap,
} from '../components/Icons'

export const FEATURE_STORIES = [
  {
    slug: 'visual-canvas',
    title: 'Infinite Visual Canvas',
    tag: 'DISCOVERY',
    icon: IconApi,
    accent: 'yellow',
    summary:
      'Map multi-step automation logic on a precise grid with triggers, branches, checks, and AI decisions that stay readable at scale.',
    detail:
      'Teams can sketch workflows, connect data sources, add model calls, and preview downstream impact before a single job goes live.',
    metrics: ['300+ connectors', '12 logic blocks', 'Live preview'],
  },
  {
    slug: 'autonomous-execution',
    title: 'Autonomous Execution',
    tag: 'EXECUTION',
    icon: IconBrain,
    accent: 'orange',
    summary:
      'Run conditional data jobs without manual intervention while the AI engine handles retries, branching, and recovery.',
    detail:
      'NeuralOps watches pipeline telemetry, detects drift, and adapts schedules or model settings before failures reach your team.',
    metrics: ['10x faster builds', '312ms orchestration', 'Zero manual retries'],
  },
  {
    slug: 'zero-trust-security',
    title: 'End-to-End Encryption',
    tag: 'SECURITY',
    icon: IconShield,
    accent: 'teal',
    summary:
      'Shield every node, credential, and data transfer with a zero-trust layer built directly into the automation runtime.',
    detail:
      'Role-based access, audit trails, secret rotation, and encrypted service-to-service traffic are active across every plan.',
    metrics: ['SOC 2 ready', 'Auto rotation', 'Full audit trails'],
  },
  {
    slug: 'production-stack',
    title: 'Production-Ready Stack',
    tag: 'DEPLOY',
    icon: IconGlobe,
    accent: 'yellow',
    summary:
      'Deploy workflows, inference endpoints, and dashboards across global regions with preview, rollback, and health checks.',
    detail:
      'Blue-green rollout controls and edge scheduling make the platform suitable for customer-facing, latency-sensitive workloads.',
    metrics: ['40+ edge PoPs', '99.97% uptime', 'Instant rollback'],
  },
  {
    slug: 'predictive-analytics',
    title: 'Predictive Analytics Suite',
    tag: 'ANALYSIS',
    icon: IconChart,
    accent: 'orange',
    summary:
      'Evaluate pipeline quality, revenue risk, churn, and demand with real-time scoring and explainable forecasts.',
    detail:
      'AutoML forecasting blends model families and highlights the business signals behind every recommendation.',
    metrics: ['90-day forecast', 'Live scoring', 'Model explainability'],
  },
  {
    slug: 'data-connectors',
    title: 'Universal Data Connectors',
    tag: 'INTEGRATIONS',
    icon: IconDatabase,
    accent: 'teal',
    summary:
      'Connect warehouses, SaaS tools, streaming systems, and internal APIs through one governed integration layer.',
    detail:
      'Schema inference, type coercion, and incremental change capture are handled automatically as sources evolve.',
    metrics: ['CDC support', 'OAuth flows', 'Hot reload'],
  },
]

export const featureBySlug = (slug) =>
  FEATURE_STORIES.find((feature) => feature.slug === slug)
