import { green } from 'chalk'

import program from '../../program'
import update from '../../update'
const createUpdateCommand = () => {
  program
    .command('update')
    .description('Check the jzzx-cli Version.')
    .alias('u')
    .action(() => {
      update()
    })
}
export default createUpdateCommand
