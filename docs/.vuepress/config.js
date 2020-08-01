const { description } = require('../../package');
const path = require("path");

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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/assets/dva-logo.svg',
    nav: [
      {
        text: 'Notes',
        link: '/notes/'
      },
      {
        text: 'MD Guide',
        link: '/kitchen-sink/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/': [
        {
          title: 'HTML',
          collapsable: false,
          children: [
            '/HTML/snippets.md'
          ]
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            '/CSS/bootstrap4.md'
          ]
        },
        {
          title: 'JS',
          collapsable: false,
          children: [
            '/JS/jquery.md',
          ]
        },
        {
          title: 'PHP',
          collapsable: false,
          children: [
            '/PHP/snippets.md',
            '/PHP/wordpress.md',
          ]
        },
        {
          title: 'CL',
          collapsable: false,
          children: [
            '/CL/SSH.md',
          ]
        },
        {
          title: 'Colors',
          collapsable: false,
          children: [
            '/colors/hex-colors.md',
          ]
        },
      ],
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname,"../assets")
      }
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['vuepress-plugin-code-copy', true],
    '@goy/svg-icons'
  ]
}
