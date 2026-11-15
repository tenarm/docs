import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import sidebar from './sidebar.json'

const title = process.env.DOCS_TITLE || 'TenArm BES'
const siteTitle = process.env.DOCS_SITE_TITLE || (process.env.DOCS_TITLE ? `${process.env.DOCS_TITLE} — Docs` : 'TenArm BES Docs')

export default withMermaid(
  defineConfig({
    title,
    description: 'Documentation for the TenArm Business Execution System',
    base: process.env.VITEPRESS_BASE || '/',
    ignoreDeadLinks: true,
    lastUpdated: true,
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

      sidebar,

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
