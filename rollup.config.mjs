import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    commonjs(),
    typescript(),

    babel({
      babelHelpers: 'runtime', // 必须明确指定，否则会导致 Babel 插件无法正常工作。
      // extensions 和 exclude: 通常最好显式指定，尽管在某些情况下可以依赖默认值，但为了避免意外行为和增加配置的可读性，显式配置是推荐的做法。
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // 显式指定 extensions
      exclude: 'node_modules/**' // 显式指定 exclude
    })
  ]
};