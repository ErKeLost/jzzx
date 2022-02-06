import { compile, writeToFile } from "../../../utils/compiler-template";
import path from 'path'
const addComponentAction = async (name, dest) => {
  // 对应ejs模板
  const result = await compile("vue-component.vue.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });
  console.log(result);
  
  // 编译模板到result
  // 将result写入.vue文件中
  // const targetPath = path.resolve(dest, `${name}.vue`)
  // writeToFile(targetPath, result)
  // // 放到对应的文件夹下
};

export { addComponentAction };
