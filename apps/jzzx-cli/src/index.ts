#!/usr/bin/env node

import program from "./core/program";
import helpOptions from "./core/help";
import cloneProjectCommand from "./core/command/clone";
import addComponentCommand from "./core/command/add-component";
import { red } from './utils/log'
cloneProjectCommand();
addComponentCommand();
helpOptions();

program.parse(process.argv);
