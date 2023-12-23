import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/'],
  splitting: false,
  // sourcemap: true,
  clean: true,
  platform: 'node',
  outDir: 'dist',
  bundle: true,
  dts: true,
  external: [
    'yargs',
    'fs',
    'path',
    'util',
    'os',
    'assert',
    'child_process',
    'rimraf',
    'chalk'
  ],
  format: ['cjs', 'esm', 'iife'],
})
