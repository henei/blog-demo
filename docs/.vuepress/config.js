module.exports = {
  title: 'Chen\'s blog',
  head: [
    ['link', { rel: 'icon', href: '/img/profile.png' }]
  ],
  description: '我的个人网站',
  themeConfig: {
    logo:"/img/profile.png",
    nav:[ // 导航栏配置
      {text: '首页', link: '/' },
      {text: 'Vue基础', link: '/vuebase/' },
      // {text: '算法题库', link: '/algorithm/'},
      { text: '链接',
        items: [
            {text:'简书',link: 'https://baidu.com' },
            {text:'GitHub',link: 'https://baidu.com' },
            {text:'码云',link: 'https://baidu.com' },
        ]
      }     
    ],
    sidebar: {
      '/vuebase/': [
        '',
        'build1',
        'build2',
        'build3',
        'combat1',
        'combat2',
        'combat3',
        'combat4',
        'expand1',
        'expand2',
        'expand3',
        'guide1',
        'guide2',
        'guide3',
        'guide4',
        'guide5',
        'summary'
      ],
    },
    // sidebarDepth: 2, // 侧边栏显示2级
  }
}