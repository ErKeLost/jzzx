import program from "../program";
import { yellow, green, blue } from "chalk";
import { PKG, JZZX_NAME, JZZX_VERSION } from "../../shared/constant";
import { addComponentAction } from "./actions/add-component-actions";
const addComponentRecommands = () => {
  program
    // 可变层参数
    .command("addcpn <name> [others...]")
    .description("新增vue组件， 例如 jzzx addcpn helloworld -d src/components")
    .action((name) => {
      addComponentAction(name, program.description || "src/components");
    });
};

export default addComponentRecommands;
