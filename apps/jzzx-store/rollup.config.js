import path from 'path'

import babel from '@rollup/plugin-babel'
import ts from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

const name = 'Adny'

export default {
  input: 'src/index.ts',
  output: [
    {
      name,
      file: 'dist/adny-store.umd.min.js',
      format: 'umd',
    },
    {
      name,
      file: 'dist/adny-store.es.min.js',
      format: 'es',
    },
    {
      name,
      file: 'dist/adny-store.cjs.min.js',
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