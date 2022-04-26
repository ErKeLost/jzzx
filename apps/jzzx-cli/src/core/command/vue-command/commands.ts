import program from '../../program'
import {
  addComponentAction,
  addPageAction,
  addStoreAction,
  addTest
} from './actions'
const createVueCommand = () => {
  program
    .command('addcpn <name>')
    .description(
      'add vue component, 例如: jzzx addcpn NavBar [-d src/components]'
    )
    .action((name) =>
      addComponentAction(name, program.opts().dest || 'src/components')
    )

  program
    .command('addpage <name>')
    .description('add vue page, 例如: jzzx addpage Home [-d dest]')
    .action((name) => {
      addPageAction(
        name,
        program.opts().dest || `src/views/${name.toLowerCase()}`
      )
    })
  program
    .command('addstore <store>')
    .description('新增vuex仓库, 例如: jzzx addstore user [-d dest]')
    .action((name) => {
      addStoreAction(name, program.opts().dest || 'src/store/modules')
    })
  program
    .command('test <test>')
    .description('测试指令')
    .action((name) => {
      addTest(name, program.opts().dest)
    })
}

export default createVueCommand
