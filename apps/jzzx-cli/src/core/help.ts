import { yellow, green, blue } from "chalk";
import program from './program'
const helpOptions = () => {
  program.option('-d --dest <dest>', 'a destination folder, 例如 -d /src/components 获取对应目标路径 🦄必填项')
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
