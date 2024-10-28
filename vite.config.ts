import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteLegacyPlugin from "@vitejs/plugin-legacy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteLegacyPlugin({
      targets: ["defaults", "fully supports es6-module"],
    }),
  ],
  build: {
    minify: "terser",
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
