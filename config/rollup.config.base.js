import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.js',
  output: [
    {
      file: 'lib/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'lib/bundle.esm.js',
      format: 'esm',
    },
    {
      file: 'lib/bundle.browser.js',
      format: 'iife',
      name: 'MyLibrary',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    terser(), // 可选：用于压缩代码
  ],
};