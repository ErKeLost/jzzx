const chooseFileType = {
  name: "fileType",
  type: "list",
  message: "请选择创建文件类型",
  choices: [
    { name: "JavaScript", value: "js" },
    { name: "TypeScript", value: "ts" },
    { name: "Tsx", value: "tsx"}
  ],
};

export { chooseFileType };
