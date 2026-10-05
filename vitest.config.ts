import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  css: {
    postcss: {}, // Isolate from parent directory postcss configs
  },
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, './src/core'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@react': path.resolve(__dirname, './src/react'),
      '@demo': path.resolve(__dirname, './src/demo'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
  },
});
