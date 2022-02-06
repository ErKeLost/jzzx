#!/usr/bin/env node

import program from "./core/program";
import helpOptions from "./core/help";
import cloneProjectRecommand from "./core/command/clone";
import addComponentRecommand from "./core/command/add-component";
cloneProjectRecommand();
addComponentRecommand();
helpOptions();
console.log(program.description);

program.parse(process.argv);
