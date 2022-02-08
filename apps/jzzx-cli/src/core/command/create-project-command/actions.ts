import { resolve } from "path";
import { promisify } from "util";
import commandSpawn from "../../../utils/terminal";
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
export { createProjectAction };
