import program from '../../program'
import { createProjectAction } from './actions'
const createProjectCommand = () => {
  program
    .command('create <project> [others...]')
    .alias('c')
    .description('克隆远程库 到你的文件夹')
    .action(createProjectAction)
}

export default createProjectCommand
