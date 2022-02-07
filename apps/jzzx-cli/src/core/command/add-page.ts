import program from "../program";
import addPageAction from "./actions/add-page-action";
const addPageAndRouteCommand = () => {
  program
  .command("addpage <page>")
  .description(
    "新增页面路由 和 页面.vue文件 config 例如： jzzx addpage Home [-d src/views] 可选参数"
  )
  .action((page) => {
    addPageAction(page, program.opts().dest || "src/views");
  });

}


export default addPageAndRouteCommand