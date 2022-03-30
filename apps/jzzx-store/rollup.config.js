import path from 'path'

import babel from '@rollup/plugin-babel'
import ts from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

const name = 'Store'

export default {
  input: 'src/index.ts',
  output: [
    {
      name,
      file: 'dist/jzzx-store.umd.min.js',
      format: 'umd',
    },
    {
      name,
      file: 'dist/jzzx-store.es.min.js',
      format: 'es',
    },
    {
      name,
      file: 'dist/jzzx-store.cjs.min.js',
      format: 'cjs',
    }
  ],
  plugins: [
    ts({
      tsconfig: path.resolve(__dirname, 'tsconfig.json')
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}
