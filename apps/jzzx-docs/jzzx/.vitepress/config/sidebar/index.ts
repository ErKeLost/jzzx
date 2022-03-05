import { h } from 'vue'
export const sidebar = {
  // '/guide/': [
  //   {
  //     text: 'Essentials',
  //     items: [
  //       { text: 'Introduction', link: '/guide/introduction' },
  //       { text: 'Installation', link: '/guide/installation' },
  //       {
  //         text: 'Application & Component Instances',
  //         link: '/guide/instance'
  //       },
  //       { text: 'Template Syntax', link: '/guide/template-syntax' },
  //       {
  //         text: 'Data Properties and Methods',
  //         link: '/guide/data-methods'
  //       },
  //       {
  //         text: 'Computed Properties and Watchers',
  //         link: '/guide/computed'
  //       },
  //       {
  //         text: 'Class and Style Bindings',
  //         link: '/guide/class-and-style'
  //       },
  //       { text: 'Conditional Rendering', link: '/guide/conditional' },
  //       { text: 'List Rendering', link: '/guide/list' },
  //       { text: 'Event Handling', link: '/guide/events' },
  //       { text: 'Form Input Bindings', link: '/guide/forms' },
  //       { text: 'Components Basics', link: '/guide/component-basics' }
  //     ]
  //   },
  //   {
  //     text: 'Components In-Depth',
  //     items: [
  //       {
  //         text: 'Component Registration',
  //         link: '/guide/component-registration'
  //       },
  //       { text: 'Props', link: '/guide/component-props' },
  //       { text: 'Non-Prop Attributes', link: '/guide/component-attrs' },
  //       { text: 'Custom Events', link: '/guide/component-custom-events' },
  //       { text: 'Slots', link: '/guide/component-slots' },
  //       {
  //         text: 'Provide / inject',
  //         link: '/guide/component-provide-inject'
  //       },
  //       {
  //         text: 'Dynamic & Async Components',
  //         link: '/guide/component-dynamic-async'
  //       },
  //       { text: 'Template refs', link: '/guide/component-template-refs' },
  //       {
  //         text: 'Handling Edge Cases',
  //         link: '/guide/component-edge-cases'
  //       }
  //     ]
  //   },
  //   {
  //     text: 'Transitions & Animation',
  //     items: [
  //       { text: 'Overview', link: '/guide/transitions-overview' },
  //       {
  //         text: 'Enter & Leave Transitions',
  //         link: '/guide/transitions-enterleave'
  //       },
  //       { text: 'List Transitions', link: '/guide/transitions-list' },
  //       { text: 'State Transitions', link: '/guide/transitions-state' }
  //     ]
  //   },
  //   {
  //     text: 'Reusability',
  //     items: [
  //       { text: 'Mixins', link: '/guide/mixins' },
  //       { text: 'Custom Directives', link: '/guide/custom-directive' }
  //     ]
  //   },
  //   {
  //     text: 'Composition API',
  //     items: [
  //       {
  //         text: 'Introduction',
  //         link: '/guide/composition-api-introduction'
  //       },
  //       { text: 'Setup', link: '/guide/composition-api-setup' },
  //       {
  //         text: 'Lifecycle Hooks',
  //         link: '/guide/composition-api-lifecycle-hooks'
  //       },
  //       {
  //         text: 'Provide / Inject',
  //         link: '/guide/composition-api-provide-inject'
  //       },
  //       {
  //         text: 'Template Refs',
  //         link: '/guide/composition-api-template-refs'
  //       }
  //     ]
  //   },
  //   {
  //     text: 'Advanced',
  //     items: [
  //       { text: 'Teleport', link: '/guide/teleport' },
  //       { text: 'Render Function', link: '/guide/render-function' },
  //       { text: 'Plugins', link: '/guide/plugins' }
  //     ]
  //   },
  //   {
  //     text: 'Digging Deeper',
  //     items: [
  //       { text: 'Reactivity in Depth', link: '/guide/reactivity' },
  //       {
  //         text: 'Reactivity Fundamentals',
  //         link: '/guide/reactivity-fundamentals'
  //       },
  //       {
  //         text: 'Reactivity in Computed and Watch',
  //         link: '/guide/reactivity-computed-watchers'
  //       },
  //       {
  //         text: 'Rendering Mechanisms and Optimizations',
  //         link: '/guide/optimizations'
  //       }
  //     ]
  //   },
  //   {
  //     text: 'Tooling',
  //     items: [
  //       {
  //         text: 'Single File Components',
  //         link: '/guide/single-file-component'
  //       },
  //       { text: 'Testing', link: '/guide/testing' },
  //       { text: 'TypeScript Support', link: '/guide/typescript-support' },
  //       { text: 'Mobile', link: '/guide/mobile' },
  //       {
  //         text: 'Production Deployment',
  //         link: '/guide/tooling/deployment'
  //       }
  //     ]
  //   },
  //   {
  //     text: 'Scaling Up',
  //     items: [
  //       { text: 'Routing', link: '/guide/routing' },
  //       { text: 'State Management', link: '/guide/state-management' },
  //       { text: 'Server-Side Rendering', link: '/guide/ssr' }
  //     ]
  //   },
  //   {
  //     text: 'Accessibility',
  //     items: [
  //       { text: 'Basics', link: '/guide/a11y-basics' },
  //       { text: 'Semantics', link: '/guide/a11y-semantics' },
  //       { text: 'Standards', link: '/guide/a11y-standards' },
  //       { text: 'Resources', link: '/guide/a11y-resources' }
  //     ]
  //   }
  // ],
  '/javascript': [
    {
      text: '设计模式',
      items: [{ text: '策略模式', link: '/javascript/design/strategy' }]
    },
    {
      text: '高级JavaScript',
      items: [
        {
          text: 'ES6 - ES12',
          link: '/javascript/es6/index'
        },
        { text: 'This指向', link: '/javascript/this/index' },
        { text: '手写call apply bind', link: '/javascript/call/index' },
        { text: '防抖', link: '/javascript/debounce/index' },
        { text: '节流', link: '/javascript/throttle/index' },
        { text: '深拷贝', link: '/javascript/deepclone/index' }
      ]
    }
  ],
  '/log/': [
    {
      text: '目录',
      items: [
        { text: '文档', link: '/log/docs/index' },
        { text: 'JZZX-CLI', link: '/log/cli/index' }
      ]
    }
  ],
  '/vue/core': [
    {
      text: '教程',
      items: [{ text: 'composition Api', link: '/vue/core/learn/index' }]
    }
  ],
  '/vue/vuex/': [
    {
      text: '基础',
      items: [
        { text: 'Vue2使用Vuex', link: '/vue/vuex/index' },
        { text: 'Vue3使用Vuex', link: '/vue/vuex/vue2' },
        { text: 'Vue2使用Pinia', link: '/vue/pinia/vue2' },
        { text: 'Vue3使用Pinia', link: '/vue/pinia/vue3' }
      ]
    }
  ],
  '/cli/': [
    {
      text: '基础',
      items: [
        { text: '安装', link: '/cli/install/index' },
        { text: '快速开始', link: '/cli/quick-start/index' }
      ]
    }
  ],
  '/code-specification/': [
    {
      text: '前端包管理器规范',
      items: [
        {
          text: `pnpm`,
          link: '/code-specification/package-specification/pnpm/index'
        },
        {
          text: 'nvm',
          link: '/code-specification/package-specification/nvm/index'
        },
        {
          text: 'nrm',
          link: '/code-specification/package-specification/nrm/index'
        }
      ]
    },
    {
      text: '前端构建规范',
      items: [
        {
          text: 'Esbuild',
          link: '/code-specification/build-specification/esbuild/index'
        },
        {
          text: 'Webpack5',
          link: '/code-specification/build-specification/webpack/index'
        },
        {
          text: 'Vite',
          link: '/code-specification/build-specification/vite/index'
        },
        {
          text: 'Rollup',
          link: '/code-specification/build-specification/rollup/index'
        }
      ]
    },
    {
      text: '前端代码检视插件规范',
      items: [
        {
          text: 'Eslint，Prettier代码规范',
          link: '/code-specification/check-specification/eslint/index'
        }
      ]
    },
    {
      text: '前端项目结构规范',
      items: [
        {
          text: '项目提交代码规范',
          link: '/code-specification/structure-specification/structure/index'
        }
      ]
    },
    {
      text: '前端代码规范',
      items: [
        {
          text: '团队书写规范',
          link: '/code-specification/structure-specification/code/index'
        },
        {
          text: 'ES6 - ES12',
          link: '/code-specification/write-specification/es6/index'
        },
        {
          text: 'JavaScript代码规范',
          link: '/code-specification/write-specification/javascript/index'
        },
        {
          text: 'TypeScript代码规范',
          link: '/code-specification/write-specification/typescript/index'
        }
      ]
    },
    {
      text: '项目搭建规范',
      items: [
        { text: `Vue2项目搭建`, link: '/guide/introduction' },
        { text: 'Vue3 + Ts 项目搭建', link: '/guide/introduction' }
      ]
    }
  ]
}
