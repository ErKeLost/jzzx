#!/usr/bin/env node

import program from "./core/program";
import helpOptions from "./core/help";
import cloneProjectCommand from "./core/command/clone";
import addComponentCommand from "./core/command/add-component";
cloneProjectCommand(); // 克隆仓库
addComponentCommand(); // 增加vue组件
helpOptions(); // 帮助option

program.parse(process.argv);
