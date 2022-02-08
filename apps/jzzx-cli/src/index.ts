#!/usr/bin/env node

import program from "./core/program";
import helpOptions from "./core/help";
import createVueCommand from "./core/command/vue-command/commands";
import createVersionCommand from './core/command/version-command/command'
import cloneProjectCommand from "./core/command/clone";
import addComponentCommand from "./core/command/add-component";
import addPageAndRouteCommand from "./core/command/add-page";
// cloneProjectCommand(); // 克隆仓库
// addComponentCommand(); // 增加vue组件
// addPageAndRouteCommand(); // 新增page and router
createVersionCommand()
createVueCommand()
helpOptions(); // 帮助option
program.parse(process.argv);
