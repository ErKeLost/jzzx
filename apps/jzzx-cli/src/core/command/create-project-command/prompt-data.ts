import { repoPreset } from "../options";

const chooseRepoPrompt = {
  name: "repo",
  type: "list",
  message: `请选择需要克隆的模板`,
  choices: [
    ...repoPreset,
    { name: "Manually 输入其他仓库地址", value: "__manual__" },
  ],
};

export { chooseRepoPrompt };
