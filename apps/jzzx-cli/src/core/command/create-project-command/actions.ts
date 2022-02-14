import { prompt } from 'inquirer'
import { resolve } from 'path'
import { promisify } from 'util'
import { red } from 'chalk'
import commandSpawn from '../../../utils/terminal'
import { vueRepo } from '../../../config/config'
import { chooseRepoPrompt } from './prompt-data'
const download = promisify(require('download-git-repo'))

const createProjectAction = async (project, dest) => {
  prompt([chooseRepoPrompt]).then(async (answers) => {
    // 打印互用输入结果
    await download(vueRepo, project, { clone: true })
    // installed
    const systemCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(systemCommand, ['install'], { cwd: `./${project}` })
    // 防止阻塞 同步线程
    commandSpawn(systemCommand, ['run', 'serve'], { cwd: `./${project}` })
  })
}
export { createProjectAction }
