import program from "../../program";
import {
  createProjectAction,
  addComponentAction,
  addPageAction,
} from "./actions";
const createVueCommand = () => {
  program
    .command("create <project> [others...]")
    .description("克隆远程库 到你的文件夹")
    .action(createProjectAction);
  program
    .command("addcpn <name>")
    .description(
      "add vue component, 例如: jzzx addcpn NavBar [-d src/components]"
    )
    .action((name) => addComponentAction(name, program.opts().dest || "src/components"));

  program
    .command("addpage <name>")
    .description("add vue page, 例如: jzzx addpage Home [-d dest]")
    .action((name) => {
      addPageAction(name, program.opts().dest || `src/views/${name.toLowerCase()}`);
    });
};

export default createVueCommand;
