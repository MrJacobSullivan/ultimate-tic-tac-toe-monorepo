import * as vite from 'vite';
import * as reactPlugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default vite.defineConfig({
  plugins: [reactPlugin.default()]
});
