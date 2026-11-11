import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

interface ModuleItem {
  id: string
  text: string
  link: string
}

const ALL_MODULES: ModuleItem[] = [
  { id: 'crm', text: 'CRM', link: '/user-guides/modules/crm' },
  { id: 'sales', text: 'Sales', link: '/user-guides/modules/sales' },
  { id: 'procurement', text: 'Procurement', link: '/user-guides/modules/procurement' },
  { id: 'inventory', text: 'Inventory', link: '/user-guides/modules/inventory' },
  { id: 'finance', text: 'Finance', link: '/user-guides/modules/finance' },
  { id: 'hr', text: 'HR', link: '/user-guides/modules/hr' },
  { id: 'payroll', text: 'Payroll', link: '/user-guides/modules/payroll' },
  { id: 'manufacturing', text: 'Manufacturing', link: '/user-guides/modules/manufacturing' },
  { id: 'maintenance', text: 'Maintenance', link: '/user-guides/modules/maintenance' },
  { id: 'asset_management', text: 'Asset Management', link: '/user-guides/modules/asset-management' },
  { id: 'projects', text: 'Projects', link: '/user-guides/modules/projects' },
  { id: 'service', text: 'Service', link: '/user-guides/modules/service' },
  { id: 'logistics', text: 'Logistics', link: '/user-guides/modules/logistics' },
  { id: 'documents', text: 'Documents', link: '/user-guides/modules/documents' },
  { id: 'portal', text: 'Portal', link: '/user-guides/modules/portal' },
  { id: 'india', text: 'GST Invoicing & Compliance', link: '/user-guides/modules/gst-invoicing' },
  { id: 'steel', text: 'Steel', link: '/user-guides/modules/steel' },
  { id: 'self_service', text: 'Employee Self-Service', link: '/user-guides/modules/self-service' },
  { id: 'reporting', text: 'Reporting', link: '/user-guides/modules/reporting' },
  { id: 'ai', text: 'AI Insights', link: '/user-guides/modules/ai' },
  { id: 'assistant', text: 'AI Assistant', link: '/user-guides/modules/assistant' },
  { id: 'core', text: 'Core Platform', link: '/user-guides/modules/core' },
  { id: 'admin', text: 'Tenant Administration', link: '/user-guides/modules/admin' },
  { id: 'control', text: 'System Control', link: '/user-guides/modules/control' },
  { id: 'monitoring', text: 'Monitoring & Observability', link: '/user-guides/modules/monitoring' },
  { id: 'platform', text: 'Platform Fleet Console', link: '/user-guides/modules/platform' },
]

interface StorylineItem {
  text: string
  link: string
  requires: string[]
}

const ALL_STORYLINES: StorylineItem[] = [
  { text: 'Order to Cash (O2C)', link: '/user-guides/storylines/order-to-cash', requires: ['sales', 'inventory'] },
  { text: 'Procure to Pay (P2P)', link: '/user-guides/storylines/procure-to-pay', requires: ['procurement', 'inventory'] },
  { text: 'Make to Order (M2O)', link: '/user-guides/storylines/make-to-order', requires: ['manufacturing', 'steel'] },
]

// Support explicit tenant filtering via DOCS_ENABLED_APPS (comma-separated list of active app ids, or 'all'/'*')
const normalizeAppId = (s: string) => s.trim().toLowerCase().replace(/-/g, '_')
const enabledAppsEnv = process.env.DOCS_ENABLED_APPS?.trim().toLowerCase()
const isAll = !enabledAppsEnv || enabledAppsEnv === 'all' || enabledAppsEnv === '*'
const enabledSet = isAll
  ? null
  : new Set(enabledAppsEnv.split(',').map(normalizeAppId))

const activeModules = enabledSet
  ? ALL_MODULES.filter((m) => enabledSet.has(normalizeAppId(m.id)))
  : ALL_MODULES

const activeStorylines = enabledSet
  ? ALL_STORYLINES.filter((s) => s.requires.some((r) => enabledSet.has(normalizeAppId(r))))
  : ALL_STORYLINES

const ALL_MODULE_SLUGS: Record<string, string> = {
  crm: 'crm',
  sales: 'sales',
  procurement: 'procurement',
  inventory: 'inventory',
  finance: 'finance',
  hr: 'hr',
  payroll: 'payroll',
  manufacturing: 'manufacturing',
  maintenance: 'maintenance',
  asset_management: 'asset-management',
  projects: 'projects',
  service: 'service',
  logistics: 'logistics',
  documents: 'documents',
  portal: 'portal',
  india: 'gst-invoicing',
  steel: 'steel',
  self_service: 'self-service',
  reporting: 'reporting',
  ai: 'ai',
  assistant: 'assistant',
  core: 'core',
  admin: 'admin',
  control: 'control',
  monitoring: 'monitoring',
  platform: 'platform',
}

const srcExcludeGlobs: string[] = ['**/node_modules/**']
if (enabledSet) {
  for (const [id, slug] of Object.entries(ALL_MODULE_SLUGS)) {
    if (!enabledSet.has(normalizeAppId(id))) {
      srcExcludeGlobs.push(`user-guides/modules/${slug}.md`)
    }
  }
}

const title = process.env.DOCS_TITLE || 'TenArm BES'
const siteTitle = process.env.DOCS_SITE_TITLE || (process.env.DOCS_TITLE ? `${process.env.DOCS_TITLE} — Docs` : 'TenArm BES Docs')

export default withMermaid(
  defineConfig({
    title,
    description: 'Complete documentation for the TenArm Business Execution System',
    // User documentation defaults to /docs/ to serve directly on https://<tenant>.tenarm.com/docs/
    base: process.env.VITEPRESS_BASE || '/docs/',
    ignoreDeadLinks: true,
    lastUpdated: true,
    srcExclude: srcExcludeGlobs,
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap', rel: 'stylesheet' }],
    ],

    themeConfig: {
      logo: {
        light: '/tenarm-mark-light.svg',
        dark: '/tenarm-mark-dark.svg',
      },
      siteTitle,
      lastUpdated: {
        text: 'Last updated on',
        formatOptions: {
          dateStyle: 'medium',
          timeStyle: 'short',
        },
      },

      nav: [
        { text: 'Getting Started', link: '/getting-started/what-is-tenarm-bes' },
        { text: 'User Guides', link: '/user-guides/' },
        { text: 'Admin Guides', link: '/admin-guides/' },
      ],

      sidebar: {
        '/getting-started/': [
          {
            text: 'Getting Started',
            items: [
              { text: 'What is TenArm BES?', link: '/getting-started/what-is-tenarm-bes' },
              { text: 'Quick Start', link: '/getting-started/quick-start' },
              { text: 'Glossary', link: '/getting-started/glossary' },
            ],
          },
        ],

        '/user-guides/': [
          {
            text: 'User Guides',
            items: [
              { text: 'Overview', link: '/user-guides/' },
              { text: 'Workspace Basics', link: '/user-guides/workspace-basics' },
            ],
          },
          ...(activeStorylines.length > 0
            ? [
                {
                  text: 'Storylines',
                  collapsed: false,
                  items: activeStorylines.map(({ text, link }) => ({ text, link })),
                },
              ]
            : []),
          {
            text: 'Modules',
            collapsed: false,
            items: activeModules.map(({ text, link }) => ({ text, link })),
          },
        ],

        '/admin-guides/': [
          {
            text: 'Admin Guides',
            items: [
              { text: 'Overview', link: '/admin-guides/' },
              { text: 'Tenant Setup', link: '/admin-guides/tenant-setup' },
              { text: 'Party Management', link: '/admin-guides/party-management' },
              { text: 'Roles & Permissions', link: '/admin-guides/roles-and-permissions' },
              { text: 'App Enablement', link: '/admin-guides/app-enablement' },
              { text: 'User Management', link: '/admin-guides/user-management' },
              { text: 'Finance Setup', link: '/admin-guides/finance-setup' },
              { text: 'Warehouse Setup', link: '/admin-guides/warehouse-setup' },
              { text: 'Product Catalog Setup', link: '/admin-guides/product-catalog-setup' },
              { text: 'Data Import & Migration', link: '/admin-guides/data-import-and-migration' },
              { text: 'System Configuration', link: '/admin-guides/system-configuration' },
              { text: 'FAQ & Troubleshooting', link: '/admin-guides/faq-and-troubleshooting' },
            ],
          },
        ],
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/tenarm' },
      ],

      search: {
        provider: 'local',
      },

      footer: {
        message: 'TenArm Business Execution System',
        copyright: '© 2026 TenArm',
      },

      outline: {
        level: [2, 3],
        label: 'On this page',
      },
    },

    vite: {
      optimizeDeps: {
        include: ['mermaid'],
      },
      ssr: {
        noExternal: ['vitepress-plugin-mermaid'],
      },
    },

    mermaid: {},
  })
)
