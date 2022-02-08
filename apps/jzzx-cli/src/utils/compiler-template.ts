import {renderFile} from "ejs";
import path, {resolve, dirname} from "path";
// import path from "path";
// const path = require("path");
import fs, { promises, existsSync, mkdirSync } from "fs";
const compile = (templateName, data) => {
  const templatePosition = `../template/${templateName}`;
  const templatePath = resolve(__dirname, templatePosition);
  return new Promise((resolve, reject) => {
    renderFile(templatePath, { data }, {}, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};

const createDirSync = (pathName): any => {
  if (existsSync(pathName)) {
    return true
  } else {
    // TODO 递归
    // if (fs.existsSync(path.dirname(path))) {
    //   fs.mkdirSync(path)
    // } else {
    //   if (fs.existsSync(path.dirname(path.dirname(path)))) {

    //   }
    // }
    if(createDirSync(dirname(pathName))) {
      mkdirSync(pathName)
      return true
    }
  }
}

const writeToFile = (path, content) => {
  // TODO 判断path是否存在 不存在 就要创建文件夹
  return promises.writeFile(path, content)
};

export { compile, writeToFile, createDirSync };
