import helpOptions from './help-option-command/help'
import createVueCommand from './vue-command/commands'
import createVersionCommand from './version-command/command'
import createProjectCommand from './create-project-command/command'
import createUpdateCommand from './update-command'
const jzzxCliCommand = () => {
  createVersionCommand()
  createProjectCommand()
  createVueCommand()
  helpOptions() // 帮助option
  createUpdateCommand()
}

export default jzzxCliCommand
