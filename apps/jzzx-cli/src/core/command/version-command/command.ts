import { green } from 'chalk'

import program from '../../program'

import { red } from '../../../utils/log'
import { VALUE_ONLINE, VERSION, JZZX_VERSION } from '../../../shared/constant'
const createVersionCommand = () => {
  program
    .version(green(JZZX_VERSION), '-v --version')
    .usage('<command> [options]')
    .action(() => red(VALUE_ONLINE, VERSION))
}
export default createVersionCommand
