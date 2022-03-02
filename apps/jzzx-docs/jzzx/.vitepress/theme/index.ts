import { VPTheme } from '../../../src/vitepress/index'
import { h, App } from 'vue'
import Banner from '../../../src/components/Banner.vue'
// uncomment to test CSS variables override
import PreferenceSwitch from '../../../src/components/PreferenceSwitch.vue'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from '../../../src/components/preferences'
// import SponsorsAside from '../../../src/components/SponsorsAside.vue'
import './override.css'

export default {
  ...VPTheme,
  Layout() {
    return h(VPTheme.Layout, null, {
      // uncomment to test layout slots
      banner: () => h(Banner),
      'sidebar-top': () => h(PreferenceSwitch),
      // 'aside-mid': () => h(SponsorsAside)
      // 'sidebar-top': () => h('div', 'hello top'),
      // 'sidebar-bottom': () => h('div', 'hello bottom'),
      // 'content-top': () => h('h1', 'Announcement!'),
      // 'content-bottom': () => h('div', 'Some ads'),
      // 'aside-top': () => h('div', 'this could be huge'),
      // 'aside-mid': () => h('div', { style: { height: '300px' }}, 'Sponsors'),
      // 'aside-bottom': () => h('div', { style: { height: '300px' }}, 'Sponsors'),
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
  }
}
