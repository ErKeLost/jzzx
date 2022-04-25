const figlet = require('figlet');
import figlet from 'figlet'
export const PKG = require('../../package.json')

export const JZZX_VERSION = PKG.version
export const JZZX_NAME = PKG.name
export const VALUE_ONLINE =
  '\r\n' +
  figlet.textSync('VALUE ONLINE', {
    font: '3D-ASCII',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 200,
    whitespaceBreak: true
  })

export const VERSION = `\n\t\t\t\t\tPublished${
  PKG.version
}Build @ Value Online.com\n\t\t\t\t\tBuild date: ${new Date().getFullYear()}-VALUE ONLINE`
