import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
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
  server: {
    port: 3000,
  },
  build: {
    emptyOutDir: false,
  },
});
