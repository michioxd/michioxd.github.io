import million from 'million/compiler';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { execSync } from 'child_process';

const commitHash = execSync('git rev-parse --short HEAD').toString();
const commitDate = execSync('git log -1 --format="%at"').toString();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
    __COMMIT_DATE__: JSON.stringify(commitDate)
  },
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
