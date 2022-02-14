import {
  writeToFile,
  createDirSync,
  ejsCompile,
} from "../../../utils/compiler-template";
import { complete } from "../../../utils/log";
import { resolve } from "path";
import { chooseFileType, chooseComponentFile } from "../../../utils/pormpt";
import { prompt } from "inquirer";
import ora from "ora";

const handleEjsToFile = async (name, dest, template, filename) => {
  // 1.获取模块引擎的路径
  const templatePath = resolve(__dirname, template);

  const result = await ejsCompile(templatePath, {
    name,
    lowerName: name.toLowerCase(),
  });

  // // 2.写入文件中
  // // 判断文件不存在,那么就创建文件
  createDirSync(dest);
  const targetPath = resolve(dest, filename);
  writeToFile(targetPath, result);
};
const addComponentAction = async (name, dest) => {
  const res = await prompt([chooseComponentFile]);
  handleEjsToFile(
    name,
    dest,
    "../../../template/vue-component.ejs",
    `${name}.vue`
  );
  complete(name, dest, `${res.componentType}`, "component create succeeded");
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
  complete(name, dest, res.fileType, "page create succeeded");
};

const addStoreAction = async (name, dest) => {
  const res = await prompt([chooseFileType]);
  handleEjsToFile(
    name,
    dest,
    "../../../template/vuex-store.js.ejs",
    `${name}.${res.fileType}`
  );
  handleEjsToFile(
    name,
    dest,
    "../../../template/vuex-types.js.ejs",
    `mutation-types.${res.fileType}`
  );
  complete(name, dest, res.fileType, "store create succeeded");
};

export { addComponentAction, addPageAction, addStoreAction };
