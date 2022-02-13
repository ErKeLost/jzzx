import { promisify } from "util";
import {
  compile,
  writeToFile,
  createDirSync,
  ejsCompile
} from "../../../utils/compiler-template";
import { green } from 'chalk'
import { resolve } from "path";
import { chooseFileType } from "../../../utils/pormpt";
import { prompt } from "inquirer";
import ora from 'ora'

const handleEjsToFile = async (name, dest, template, filename) => {
  // 1.获取模块引擎的路径
  const templatePath = resolve(__dirname, template);

  const result = await ejsCompile(templatePath, {name, lowerName: name.toLowerCase()});
  

  // // 2.写入文件中
  // // 判断文件不存在,那么就创建文件
  createDirSync(dest);
  const targetPath = resolve(dest, filename);
  writeToFile(targetPath, result);
};
const addComponentAction = async (name, dest) => {
  handleEjsToFile(
    name,
    dest,
    "../../../template/vue-component.ejs",
    `${name}.vue`
  );
};

const addPageAction = async (name, dest) => {
  const res = await prompt([chooseFileType]);
  // const spinner = ora("Downloading...");
  handleEjsToFile(
    name,
    `src/router/modules/${name}`,
    "../../../template/vue-router.ejs",
    `${name}.${res.fileType}`
  );
  handleEjsToFile(
    name,
    dest,
    "../../../template/vue-component.ejs",
    `${name}.vue`
  );
  // spinner.succeed();
  console.log(green('\n file created completed!'))
  console.log('\n To get started')
  console.log(`\n    cd ${name} \n`)
};

const addStoreAction = async (name, dest) => {
  const res = await prompt([chooseFileType]);
  handleEjsToFile(name, dest, '../../../template/vuex-store.js.ejs', `${name}.${res.fileType}`)
  handleEjsToFile(name, dest, '../../../template/vuex-types.js.ejs', `mutation-types.${res.fileType}`)
};

export { addComponentAction, addPageAction, addStoreAction };
