import { promisify } from "util";
import commandSpawn from "../../../utils/terminal";
import {
  compile,
  writeToFile,
  createDirSync,
} from "../../../utils/compiler-template";
import { resolve } from "path";
import { vueRepo } from "../../../config/config";
const download = promisify(require("download-git-repo"));

const createProjectAction = async (project, dest) => {
  // clone 项目
  await download(vueRepo, project, { clone: true });
  // installed
  const systemCommand = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(systemCommand, ["install"], { cwd: `./${project}` });
  // 防止阻塞 同步线程
  commandSpawn(systemCommand, ["run", "serve"], { cwd: `./${project}` });
  open("http://localhost:8080");
};

const addComponentAction = async (name, dest) => {
  // 对应ejs模板
  const result = await compile("vue-component.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });
  console.log(result);
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
  createDirSync(dest);
  // if (createDirSync(dest)) {
  const targetPagePath = resolve(dest, `${name}.vue`);
  const targetRoutePath = resolve(dest, "route.js");
  writeToFile(targetPagePath, pageResult);
  writeToFile(targetRoutePath, routeResult);
  // }
};

export { createProjectAction, addComponentAction, addPageAction };
