import { yellow, green, blue } from "chalk";
import program from './program'
const helpOptions = () => {
  program.option(
    yellow("-d --dest <dest>"),
    green("基于目标文件夹创建文件 例如：-d /src/components")
  );
  program.option(
    yellow("-f --framework <framework>"),
    green("选择你的框架 例如：-f vue3")
  );
  program.on('--help', () => {
    console.log("");
    console.log("Other");
    console.log("   otherOptions");
  })
};

export default helpOptions;
