import { resolve } from "path";
import {
  compile,
  writeToFile,
  createDirSync,
} from "../../../utils/compiler-template";

const addPageAction = async (name, dest) => {
  const pageResult = await compile("vue-component.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });
  const routeResult = await compile("vue-router.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });
  createDirSync(dest)
  // if (createDirSync(dest)) {
  const targetPagePath = resolve(dest, `${name}.vue`);
  const targetRoutePath = resolve(dest, "route.js");
  writeToFile(targetPagePath, pageResult);
  writeToFile(targetRoutePath, routeResult);
  // }
};

export default addPageAction;
