export const nav = [
  {
    text: '文档',
    // activeMatch: `^/(guide|examples)/`,
    items: [
      {
        items: [
          { text: '快速开始', link: '' },
          { text: '安装', link: '' },
          { text: '更新日志', link: '/log/docs/index'},
          { text: 'Vue3源码全解析', link: '/vue/source-code/index'},
          { text: '高级JavaScript', link: '/javascript/this/index'}
        ]
      }
    ]
  },
  {
    text: '脚手架',
    // activeMatch: `^/(cli|examples)/`,
    link: '/cli/install/index'
  },
  // {
  //   text: 'Playground',
  //   link: 'https://sfc.vuejs.org'
  // },
  {
    text: 'Vue规范',
    activeMatch: `^/vue/`,
    items: [
      {
        text: 'Progress Framework',
        items: [
          { text: 'Vue2', link: '/vue/vue2/index' },
          { text: 'Vue3/core', link: '/vue/core/index' },
          { text: 'Vuex@next详解', link: '/vue/vuex/index' },
          { text: 'VueRouter@next详解', link: '/vue/vue-router/index' },
          { text: 'Pinia详解', link: '/vue/pinia/index' }
        ]
      },
      {
        text: 'Template',
        items: [
          { text: 'Vue2', link: '/vue/vue2/vue2' },
          { text: '移动端Vue2 ', link: '/vue/vue2/vue2-mobile' },
          { text: 'Vue3 + Ts', link: '/vue/core/vue3-mobile' },
          { text: '移动端Vue3 + Ts', link: '/vue/core/vue3-mobile' }
        ]
      },
      {
        text: 'Vue Framework',
        items: [{ text: 'Nuxt3', link: '/vue/nuxt3' }]
      }
    ]
  },
  {
    text: 'React规范',
    activeMatch: `^/react/`,
    items: [
      {
        text: 'A JavaScript library',
        items: [
          { text: 'React17', link: '/react/react17' },
          { text: 'React18', link: '/react/react18' }
        ]
      },
      {
        text: 'React Framework',
        items: [{ text: 'UmiJS', link: '/react/umijs' }]
      }
    ]
  },
  {
    text: '插件库',
    link: '/plugin-library'
  },
  {
    text: '工具库',
    items: [
      {
        text: '工具库',
        items: [
          {
            text: 'vue指令库',
            link: '/tool-library/directive-library/index'
          },
          {
            text: 'shared函数共享库',
            link: '/tool-library/shared-library/index'
          }
        ]
      },
      {
        text: '状态管理库',
        items: [
          { text: 'jzzx-store', link: '/tool-library/state-library/index' },
          {
            text: 'vuex工具Devtools',
            link: 'https://github.com/vuejs/vue-devtools'
          }
        ]
      }
    ]
  },
  {
    text: '组件库',
    activeMatch: `^/community/`,
    items: [
      { 
        text: 'Element-ui',
        items: [
          { text: 'stock', link: '/community/team' },
          // {
          //   text: 'Contribution Guide',
          //   link: '/community/contribution-guide'
          // },
          // { text: 'Events', link: 'https://events.vuejs.org/' }
        ]
      }
    ]
  },
  {
    text: '项目架构规范',
    link: '/code-specification/write-specification/javascript/index'
  },
  { text: '实时编辑', link: '/examples/' },
]
