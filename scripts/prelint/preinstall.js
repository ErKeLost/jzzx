try {
  if (!/pnpm/.test(process.env.npm_execpath || '')) {
    throw new Error(
      '\u001B[33m [JZZX CONTROL WARNING]: This repository requires using pnpm as the package manager ' +
        ' for scripts to work properly. 此存储库需要使用pnpm作为包管理器\u001B[39m\n'
    )
  }
} catch (e) {
  console.log(e.message)
  process.exitCode = 1
}
