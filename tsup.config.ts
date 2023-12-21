import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/'],
  splitting: false,
  // sourcemap: true,
  clean: true,
  platform: 'neutral',
  outDir: 'dist',
  bundle: true,
  dts: true,
  format: ['cjs', 'esm', 'iife'],
})
