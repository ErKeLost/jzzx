import { prompt } from "inquirer";
import { resolve } from "path";
import { promisify } from "util";
import { red } from 'chalk'
import commandSpawn from "../../../utils/terminal";
import { vueRepo } from "../../../config/config";
import { chooseRepoPrompt } from "./prompt-data";
const ora = require("ora");
const download = promisify(require("download-git-repo"));

const createProjectAction = async (project, dest) => {
  prompt([chooseRepoPrompt]).then(async (answers) => {
    const loading = ora(red("下载中"));
    loading.spinner = {
      interval: 70, //转轮动画每帧之间的时间间隔
      frames: ["✹"],
    };
    loading.color = "blue";
    loading.start();

    // 打印互用输入结果
    // await download(answers.repo, project, { clone: true });
    // // installed
    // const systemCommand = process.platform === "win32" ? "npm.cmd" : "npm";
    // await commandSpawn(systemCommand, ["install"], { cwd: `./${project}` });
    // // 防止阻塞 同步线程
    // commandSpawn(systemCommand, ["run", "serve"], { cwd: `./${project}` });
  });
};
export { createProjectAction };
