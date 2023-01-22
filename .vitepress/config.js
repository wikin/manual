import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";

export default defineConfig({
  title: 'IdeaPoint',
  description: 'Just playing around.',

  themeConfig: {
    logo: '/icon.svg',
    head: [['link', { rel: 'icon', href: '/logo.svg' }]],
    nav:[
      {text: 'Úvod', link: '/'},
      {text: 'Co je to IdeaPOINT?', link: '/co-je-ideapoint'},
      {text:'Manuál', link:'/manual/projekty/'},
    ],
    sidebar: {
      '/manual/': [
        {
          text: 'Projekty',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Úvod', link: '/manual/projekty/' },
            { text: 'Zakládání projektu ', link: '/manual/projekty/zakladani' },
            { text: 'Řízení projektu', link: '/manual/projekty/rizeni-projektu' },
            { text: 'Aktivity na projektu', link: '/manual/projekty/aktivity' },
            { text: 'Dokumentace na projektu', link: '/manual/projekty/dokumentace' },
          ],
        },
        {
          text: 'Kalendáře',
          collapsible: true,
          collapsed: true,
          items:[
            { text: 'Úvod', link: '/manual/kalendare' },
          ],
        },
      ]
    },
    footer: {
      copyright: 'Copyright © 2023 Bright Way Solution, a.s.'
    },
    docFooter: {
      prev: 'Předchozí',
      next: 'Nasledující'
    },
    outline:{
      label:'Na této stránce',
    }
    
  }
})
