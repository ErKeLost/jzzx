#!/usr/bin/env node

import program from "./core/program";
import helpOptions from "./core/help";
import cloneProjectCommand from "./core/command/clone";
import addComponentCommand from "./core/command/add-component";
import addPageAndRouteCommand from "./core/command/add-page";
cloneProjectCommand(); // 克隆仓库
addComponentCommand(); // 增加vue组件
addPageAndRouteCommand(); // 新增page and router
helpOptions(); // 帮助option

program.parse(process.argv);
