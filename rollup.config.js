
// rollup.config.js
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

// js 压缩
// import { uglify } from 'rollup-plugin-uglify'

// 使用第三方模块
import resolve from 'rollup-plugin-node-resolve'

// 使用node模块
import commonjs from 'rollup-plugin-commonjs';

// 打包在浏览器中使用的库
import builtins from 'rollup-plugin-node-builtins';

import { version } from './package.json';

export default {
  input: 'src/main.js',
  // external: ['jquery'],
  output: {
    name: "rollupTest",
    file: 'dist/rollup.bundle.js',
    format: 'umd',
    sourcemap: false,
    // paths: {
    //   jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.js'
    // },
    globals: {
      jquery: '$'
    },
    banner: '/* my-library version ' + version + ' */',
    footer: '/* follow me on Twitter! @rich_harris */'
  },
  plugins: [json(), builtins(), resolve({
    browser: true
  }), commonjs(), babel()],
  treeshake: true
};