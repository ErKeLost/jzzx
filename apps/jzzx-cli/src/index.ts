#!/usr/bin/env node

import program from './core/program'
import jzzxCliCommand from './core/command/index'

jzzxCliCommand()
program.parse(process.argv)
