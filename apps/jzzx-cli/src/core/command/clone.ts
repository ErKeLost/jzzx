import program from "../program";
import { yellow, green, blue } from "chalk";
import { PKG, JZZX_NAME, JZZX_VERSION } from "../../shared/constant";
import { cloneProjectAction } from "./actions/clone-actions";
import { red } from '../../utils/log'
import { VALUE_ONLINE, VERSION } from "../../shared/constant";
const cloneProjectCommand = () => {
  program
    .version(green(JZZX_VERSION), "-v --version")
    .usage("<command> [options]")
    .action(() => red(VALUE_ONLINE, VERSION))
  program
    // 可变层参数
    .command("clone <project> [others...]")
    .description("克隆一个远程库 into 你的文件夹")
    .action(cloneProjectAction);
};

export default cloneProjectCommand;
