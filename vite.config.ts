import million from 'million/compiler';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  build: {
    target: [
      // select only browsers that support top-level await
      'chrome89',
      'firefox89',
      'safari15',
      'edge89',
      'opera75'
    ],
    minify: "terser",
    cssMinify: "lightningcss",
    terserOptions: {
      parse: {
        html5_comments: false,
      },
      format: {
        comments: false
      }
    }
  }
})
