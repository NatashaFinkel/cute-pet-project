import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/cute-pet-project',
});
