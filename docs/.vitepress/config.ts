import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/hblist/',
  markdown: {
    config(md) {
      md.disable('emoji')
    },
  },
  title: 'Switch 2 Homebrew List',
  description: '...',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    socialLinks: [],
    footer: {
      message: '',
    },
  },
  cleanUrls: true,
})
