const updateNotifier = require('update-notifier')
const pkg = require('../../../package.json')
const chalk = require('chalk')
import { red } from '../../utils/log'

const notifier = updateNotifier({
  pkg,
  updateCheckInterval: 1000 // 默认为 1000 * 60 * 60 * 24（1 天）
})

// function update() {
//   console.log(notifier.update)
//   console.log(notifier)

//   if (notifier.update) {
//     red(`有新版本可用：${notifier.update.latest}，建议您在使用前进行更新`)
//     notifier.notify()
//   } else {
//     red('已经是最新版本')
//   }
// }
function update() {
	// 当检测到版本时，notifier.update 会返回 Object
    // 此时可以用 notifier.update.latest 获取最新版本号
	if (notifier.update) {
		console.log(`New version available: ${chalk.cyan(notifier.update.latest)}, it's recommended that you update before using.`)
		notifier.notify()
	} else {
		console.log('No new version is available.')
	}
}
export default update
