import { defineConfig } from 'vite';
import react from '@vitejs/react-refresh'; // Or '@vitejs/plugin-react' depending on your package.json
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
