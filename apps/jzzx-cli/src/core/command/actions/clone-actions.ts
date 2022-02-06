import { promisify } from "util";
const download = promisify(require("download-git-repo"));
import commandSpawn from "../../../utils/terminal";
import { vueRepo } from "../../../config/config";
const cloneProjectAction = async (project) => {
  // clone 项目
  await download(vueRepo, project, { clone: true });
  // install
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(command, ["install"], { cwd: `./${project}` });
  // 防止阻塞 同步线程
  commandSpawn(command, ["run", "serve"], { cwd: `./${project}` });
  open("http://localhost:8080")
};

export { cloneProjectAction };
