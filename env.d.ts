/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * 当前要构建 / 上传的 bundle 名，对应 dao3.config.ts -> bundles 的 key。
   * 为空时表示构建并上传所有启用的 bundle（多入口）。
   */
  readonly VITE_CURRENT_FILE: string;

  /**
   * 是否在构建后自动上传脚本，字符串形式的布尔值："true" | "false"
   */
  readonly VITE_UPDATE_FILE: string;

  /**
   * 按节点名前缀筛选 UI 元素，留空表示显示全部
   */
  readonly VITE_UI_INDEX_PREFIX: string;

  /**
   * 脚本要上传的目标地图ID，必须为「扩展地图」类型
   */
  readonly VITE_DAO3_MAP_ID: string;
}
