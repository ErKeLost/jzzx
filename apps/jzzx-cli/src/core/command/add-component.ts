import program from "../program";
import { yellow, green, blue } from "chalk";
import { PKG, JZZX_NAME, JZZX_VERSION } from "../../shared/constant";
import { addComponentAction } from "./actions/add-component-actions";
const addComponentCommands = () => {
  program
    // 可变层参数
    .command("addcpn <name> [others...]")
    .description("新增vue组件， 例如 jzzx addcpn helloworld -d src/components")
    .action((name) =>{
      // 获取 options 后置 参数
      const dest = program.opts().dest
      addComponentAction(name, dest || "src/components")
    }
      // addComponentAction(name, program.description || "src/components");
    );
};

export default addComponentCommands;
