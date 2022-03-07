import type { App } from 'vue'
import Loading from './src/loading'

Loading.install = function(app: App): void {
  app.component(Loading.name, Loading)
}

export { Loading }

export default {
  title: 'Loading 加载',
  category: '数据展示',
  status: '100%', // TODO: 组件若开发完成则填入"已完成"，并删除该注释
  install(app: App): void {
        app.use(Loading as any)
  }
}
