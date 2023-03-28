import { hopeTheme } from 'vuepress-theme-hope/perf'

import { zhNavbarConfig } from './navbar/zh'
import { zhSidebarConfig } from './sidebar/index.js'
// enSidebarConfig,
export default hopeTheme({
  hostname: 'https://lfange.github.io',

  author: {
    name: 'lfange',
    url: 'https://mrhope.site',
  },

  favicon: '/images/icons/p.png',

  iconAssets: '//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css',

  logo: '/assets/dragon.png',

  repo: 'lfange/lfange.github.io',

  repoDisplay: false,

  docsDir: 'vhope',

  locales: {
    '/': {
      navbar: zhNavbarConfig,
      sidebar: zhSidebarConfig,

      footer: 'MIT Licensed | Copyright © 2021-present Fan Ge',

      copyright: '基于 MIT 协议，© 2017-至今 Fange',

      blog: {
        description:
          'Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems',
        // intro: '/about/',
        medias: {
          GitHub: 'https://github.com/Lfage',
          // BiliBili: 'https://space.bilibili.com/630395917',
          QQ: 'http://wpa.qq.com/msgrd?v=3&uin=653398363&site=qq&menu=yes',
          Qzone: 'https://653398363.qzone.qq.com/',
          Gmail: 'mailto:a653398363@outlook.com',
          Zhihu: 'https://www.zhihu.com/people/bo-la-tu-de-li-xiang-guo-67',
          // Steam: 'https://steamcommunity.com/id/Mr-Hope/',
          Weibo: 'https://weibo.com/misterhope',
          Gitee: 'https://gitee.com/lfange',
          Twitter: 'https://twitter.com/@_653398363',
          // Telegram: 'https://t.me/Mister_Hope',
        },
      },
    },

    '/en/': {
      // navbar: enNavbarConfig,
      // sidebar: enSidebarConfig,

      footer:
        'Theme by <a href="https://theme-hope.vuejs.press">vuepress-theme-hope</a>',

      copyright: 'MIT Licensed, © 2019-present Mr.Hope',

      blog: {
        description:
          "VuePress project member, front-end developer, studying for a master's degree in theoretical physics",
        intro: '/en/about/',
        medias: {
          Gmail: 'mailto:mister-hope@outlook.com',
          Steam: 'https://steamcommunity.com/id/Mr-Hope/',
          GitHub: 'https://github.com/Mister-Hope',
          Twitter: 'https://twitter.com/Mister_Hope',
          Telegram: 'https://t.me/Mister_Hope',
        },
      },
    },
  },

  displayFooter: true,
  copyright: 'Copyright © 2019-present Mr.Hope',

  plugins: {
    blog: {
      excerptLength: 0,
    },

    comment: {
      provider: 'Waline',
      serverURL: 'https://comment.mrhope.site',
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      mathjax: true,
      mermaid: true,
      presentation: true,
      sub: true,
      sup: true,
      vPre: true,
    },

    pwa: {
      themeColor: '#5c92d1',
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: '/assets/icon/apple-touch-icon.png',
        statusBarColor: 'white',
      },
      msTile: {
        image: '/assets/icon/ms-icon-144.png',
        color: '#ffffff',
      },
      manifest: {
        name: '哓番茄 的个人博客',
        short_name: '哓番茄 Blog',
        description: '哓番茄 的个人博客',
        theme_color: '#5c92d1',
        icons: [
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: '分类',
            short_name: '分类',
            icons: [
              {
                src: '/assets/icon/category-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
            ],
            url: '/category/',
            description: '文章分类分组',
          },
          {
            name: '标签',
            short_name: '标签',
            icons: [
              {
                src: '/assets/icon/tag-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
            ],
            url: '/tag/',
            description: '文章标签分组',
          },
          {
            name: '时间线',
            short_name: '时间线',
            icons: [
              {
                src: '/assets/icon/timeline-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
            ],
            url: '/timeline/',
            description: '时间线文章列表',
          },
          {
            name: '个人介绍',
            short_name: '个人介绍',
            icons: [
              {
                src: '/assets/icon/about-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
            ],
            url: '/about/',
            description: '个人介绍',
          },
        ],
      },
    },
  },
})
