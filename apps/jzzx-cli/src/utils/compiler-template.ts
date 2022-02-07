import {renderFile} from "ejs";
import {resolve} from "path";
// import path from "path";
// const path = require("path");
import fs, { promises } from "fs";
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

const writeToFile = (path, content) => {
  return promises.writeFile(path, content)
};

export { compile, writeToFile };
