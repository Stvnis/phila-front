import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul', // or 'v8'
    },
  },
  resolve: {
    alias: {
      '@phila-front': path.resolve(__dirname, './src'),
    },
  },
});
