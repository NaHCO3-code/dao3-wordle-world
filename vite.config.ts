import type { PluginOption } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import path, { dirname } from 'path';
import dao3cfg from './dao3.config';
import { ArenaUpdateScript } from 'vite-plugin-arenapro-script';
import checker from 'vite-plugin-checker';

const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const buildTarget =
    (env.VITE_BUILD_TARGET as 'client' | 'server') || 'server';
  const shouldUpload = env.VITE_UPDATE_FILE === 'true';
  const currentBundleName = env.VITE_CURRENT_FILE;

  const isClient = buildTarget === 'client';
  const srcRoot = isClient ? 'client' : 'server'; // 请勿修改
  const outDir = isClient ? 'dist/client' : 'dist/server';

  const isDebugMode = mode === 'debug';
  const isLintMode = mode === 'debug' || mode === 'production';
  const isUploadMode = shouldUpload && !isDebugMode;

  // 从 bundles 生成 rollup 多入口配置
  const inputEntries: Record<string, string> = {};

  for (const [bundleName, bundle] of Object.entries(dao3cfg.bundles)) {
    if (currentBundleName && bundleName !== currentBundleName) {
      continue;
    }
    if (bundle.enable === false) {
      continue;
    }

    const side = bundle[buildTarget];
    if (!side?.entry) {
      continue;
    }

    inputEntries[bundleName] = path.resolve(`${srcRoot}/src/`, side.entry);
  }

  // 根据当前模式动态组装 Vite 插件
  const plugins: PluginOption[] = [];

  if (isLintMode) {
    plugins.push(
      checker({
        typescript: {
          tsconfigPath: `${srcRoot}/tsconfig.json`,
        },
        eslint: {
          lintCommand: `eslint "${srcRoot}/src/**/*.{ts,tsx,js,cjs,mjs,jsx}"`,
        },
      })
    );
  }

  if (isUploadMode) {
    plugins.push(
      ArenaUpdateScript({
        outDir,
        target: buildTarget,
        env,
      })
    );
  }

  return {
    plugins,
    resolve: {
      // 常用路径别名，方便在 client/server 里互相复用代码
      alias: {
        '@src': path.resolve(__dirname, srcRoot, 'src'),
        '@shares': path.resolve(__dirname, 'shares'),
        '@server': path.resolve(__dirname, 'server'),
        '@client': path.resolve(__dirname, 'client'),
        '@root': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // 根据当前目标（client/server）输出到不同目录
      outDir,
      emptyOutDir: true,
      minify: mode === 'debug' || mode === 'development' ? false : 'esbuild',
      sourcemap: mode === 'debug',
      target: isClient ? 'esnext' : 'node16',
      rollupOptions: {
        input: inputEntries,
        external: [],
        output: {
          entryFileNames: `[name].${buildTarget}.js`,
          chunkFileNames: `[name].${buildTarget}.chunk.js`,
        },
      },
    },
  };
});
