import { createApp } from 'vue'
import App from './App.vue'
import '@vue/repl/style.css'
import naive from 'naive-ui'
// @ts-expect-error Custom window property
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: 'id:repl'
}

createApp(App).use(naive).mount('#app')
