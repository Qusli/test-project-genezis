import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader({
    defaultImport: "component"
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "color": path.resolve(__dirname, "src/assets/style/color"),
      "font": path.resolve(__dirname, "src/assets/style/font")
    }
  }
})
