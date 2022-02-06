import ejs from "ejs";
import path from "path";
import fs from "fs";
const compile = (templateName, data) => {
  const templatePosition = `../template/${templateName}`;
  const templatePath = path.resolve(__dirname, templatePosition);
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, res) => {
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
  return fs.promises.writeFile(path, content)
};

export { compile, writeToFile };
