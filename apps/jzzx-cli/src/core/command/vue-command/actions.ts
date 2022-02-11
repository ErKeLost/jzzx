import { promisify } from "util";
import {
  compile,
  writeToFile,
  createDirSync,
} from "../../../utils/compiler-template";
import { resolve } from "path";
import { chooseFileType } from "../../../utils/pormpt";
import { prompt } from "inquirer";
const addComponentAction = async (name, dest) => {
  // 对应ejs模板
  const result = await compile("vue-component.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });
  // 编译模板到result
  // 将result写入.vue文件中
  const targetPath = resolve(dest, `${name}.vue`);
  writeToFile(targetPath, result);
  // // 放到对应的文件夹下
};

const addPageAction = async (name, dest) => {
  const pageResult = await compile("vue-component.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });
  const routeResult = await compile("vue-router.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });
  const res = await prompt([chooseFileType]);
  createDirSync(`src/router/modules/${name}`);
  createDirSync(dest);
  const targetPagePath = resolve(dest, `${name}.vue`);
  const targetRoutePath = resolve(
    `src/router/modules/${name}`,
    `${name}.${res.fileType}`
  );
  writeToFile(targetPagePath, pageResult);
  writeToFile(targetRoutePath, routeResult);
};

const addStoreAction = async (name, dest) => {
  const storeResult = await compile("vuex-store.ejs", {});
  const mutationsTypes = await compile("vuex-types.ejs", {});
  createDirSync(dest);
  const res = await prompt([chooseFileType]);
  const targetStorePath = resolve(dest, `${name}.${res.fileType}`);
  const targetTypePath = resolve(dest, `mutation-type.${res.fileType}`);
  writeToFile(targetStorePath, storeResult);
  writeToFile(targetTypePath, mutationsTypes);
};

export { addComponentAction, addPageAction, addStoreAction };
