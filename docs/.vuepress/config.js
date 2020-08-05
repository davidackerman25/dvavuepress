const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'David Ackerman',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "192x192",  href: "/android-icon-192x192.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }], 
    ['link', { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/manifest.json" }],
    ['meta', { name: "msapplication-TileColor", content: "#ffffff" }],
    ['meta', { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" }],
    ['meta', { name: "theme-color", content: "#ffffff" }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/davidackerman25/dvavuepress',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/assets/dva-logo.svg',
    nav: [
      {
        text: 'Projects',
        link: '/',
        items: [
          { text: 'Mark-10 - website redesign', link: '/projects/m10-website.html' },
          { text: 'SEPA Symposium', link: '/projects/sepa.html' },
          { text: 'SCACNC', link: '/projects/scacnc.html' },
          { text: 'Motion Graphics - IDJNOW', link: '/projects/idjnow.html' },
          { text: 'The Farmhouse Bed and Breakfast', link: '/projects/farmhousebnb.html' },
          { text: 'TBR News Media - Data Visualization', link: '/projects/tbr-datavis.html' },
          { text: 'TBR News Media – Business Highlights', link: '/projects/tbr-businesshighlights.html' }
        ]
      },
      {
        text: 'Notes',
        link: '/notes/'
      },
      {
        text: 'Resume',
        link: '/resume-davidackerman-050320.pdf',
        target: '_blank'
      },
      {
        text: 'MD Guide',
        link: '/md-guide/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/notes/': [
        {
          title: 'HTML',
          collapsable: false,
          children: [
            '/notes/HTML/snippets.md'
          ]
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            '/notes/CSS/flexbox.md',
            '/notes/CSS/frameworks.md',
            '/notes/CSS/fontawesome.md',
          ]
        },
        {
          title: 'JS',
          collapsable: false,
          children: [
            '/notes/JS/jquery.md',
          ]
        },
        {
          title: 'PHP',
          collapsable: false,
          children: [
            '/notes/PHP/snippets.md',
            '/notes/PHP/wordpress.md',
          ]
        },
        {
          title: 'CL',
          collapsable: false,
          children: [
            '/notes/CL/linux.md',
            '/notes/CL/dos.md',
            '/notes/CL/SSH.md',
          ]
        },
        {
          title: 'Colors',
          collapsable: false,
          children: [
            '/notes/colors/hex-colors.md',
          ]
        },
        {
          title: 'Links',
          collapsable: false,
          children: [
            '/notes/links/web-dev.md',
            '/notes/links/web-design.md',
            '/notes/links/ecommerce.md'
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.my-wrapper .my-img'
      },
    ],
    ['vuepress-plugin-code-copy', true],
    '@goy/svg-icons'
  ]
}
