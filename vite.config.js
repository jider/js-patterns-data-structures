import { resolve } from 'path';
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        debounce: resolve(__dirname, 'src/debounce/index.html'),
        throttle: resolve(__dirname, 'src/throttle/index.html')
      }
    }
  }
})
