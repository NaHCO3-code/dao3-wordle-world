# ArenaPro CLI

- 提供一套基于 Vite 的神岛模板工程（具有`client/`、`server/`编辑端）
- 提供命令行工具 `apc`，用于登录神岛、管理地图、同步资源、构建与调试

在线文档：https://docs.box3lab.com/arenapro/zh/cli/guide/

## 模板工程结构

CLI 自带的 Vite 模板工程主要目录如下：

- `client/`：客户端应用源码
- `server/`：服务端应用源码
- `shares/`：前后端共享代码
- `i18n/`：多语言配置与资源

## 开发说明

- TypeScript + ESLint + Prettier 作为基础规范
- ESLint 配置：`eslint.config.mjs`
- Vite 配置：`vite.config.ts`

你可以在此基础上按业务需要自由扩展前端工程，同时通过 `apc` 完成与神岛地图的联动开发流程。
# dao3-wordle-world
