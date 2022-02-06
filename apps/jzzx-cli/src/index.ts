#!/usr/bin/env node

import chalk from "chalk";
import path, { join } from "path";
import * as pacote from "pacote";
import fs from 'fs'
import { Command } from 'commander';
const program = new Command();
// let commandsPath = []
// let pkgVersion = ''
// let pkgName = ''
// // const getPkgInfo = () => {
//   // const __dirname = path.resolve()
//   const jsonPath = path.resolve(__dirname, '../package.json')
//   const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
//   const jsonResult = JSON.parse(jsonContent)
//   pkgVersion = jsonResult.version
//   pkgName =  jsonResult.name
// // }

// // const getLatestVersion = async () => {
//   // const manifest = await pacote.manifest(`${pkgName}@latest`);
//   // return manifest.version;
// // };

// console.log(chalk.bgYellow(123456456456));
program
  .version(`${require('../package.json').version}`, '-v --version')
  .usage('<command> [options]');

program.parse(process.argv);
