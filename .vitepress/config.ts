import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'TenArm BES',
    description: 'Complete documentation for the TenArm Business Execution System',
    base: process.env.VITEPRESS_BASE || '/',
    ignoreDeadLinks: true,
    srcExclude: ['**/node_modules/**'],
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
      siteTitle: 'TenArm BES Docs',

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
          {
            text: 'Storylines',
            collapsed: false,
            items: [
              { text: 'Order to Cash (O2C)', link: '/user-guides/storylines/order-to-cash' },
              { text: 'Procure to Pay (P2P)', link: '/user-guides/storylines/procure-to-pay' },
              { text: 'Make to Order (M2O)', link: '/user-guides/storylines/make-to-order' },
            ],
          },
          {
            text: 'Modules',
            collapsed: false,
            items: [
              { text: 'CRM', link: '/user-guides/modules/crm' },
              { text: 'Sales', link: '/user-guides/modules/sales' },
              { text: 'Procurement', link: '/user-guides/modules/procurement' },
              { text: 'Inventory', link: '/user-guides/modules/inventory' },
              { text: 'Finance', link: '/user-guides/modules/finance' },
              { text: 'HR', link: '/user-guides/modules/hr' },
              { text: 'Payroll', link: '/user-guides/modules/payroll' },
              { text: 'Manufacturing', link: '/user-guides/modules/manufacturing' },
              { text: 'Maintenance', link: '/user-guides/modules/maintenance' },
              { text: 'Asset Management', link: '/user-guides/modules/asset-management' },
              { text: 'Projects', link: '/user-guides/modules/projects' },
              { text: 'Service', link: '/user-guides/modules/service' },
              { text: 'Logistics', link: '/user-guides/modules/logistics' },
              { text: 'Documents', link: '/user-guides/modules/documents' },
              { text: 'Portal', link: '/user-guides/modules/portal' },
              { text: 'GST Invoicing', link: '/user-guides/modules/gst-invoicing' },
            ],
          },
        ],

        '/admin-guides/': [
          {
            text: 'Admin Guides',
            items: [
              { text: 'Overview', link: '/admin-guides/' },
              { text: 'Tenant Setup', link: '/admin-guides/tenant-setup' },
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
