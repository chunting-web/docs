import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  base: '/docs/',
  title: '我的文档库',
  description: '一个清晰、持续生长的个人知识库。',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '文档库说明', link: '/guide/' },
          { text: '写作规范', link: '/guide/writing' }
        ]
      },
      {
        text: '工具与方法',
        items: [
          { text: '工具清单', link: '/tools/' },
          { text: '每日复盘', link: '/tools/daily-review' }
        ]
      },
      {
        text: '随笔',
        items: [
          { text: '索引', link: '/notes/' }
        ]
      },
      {
      text: 'AI之光',
      items: [
        { text: '备注修改参考文档', link: '/ai-light/' },
      ]
}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chunting-web' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页内容'
    },
    footer: {
      message: '用 Markdown 记录，用链接组织。',
      copyright: 'Copyright © 2026'
    }
  }
})
