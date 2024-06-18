import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

/// <reference types="vite-plugin-svgr/client" />

export default defineConfig({
  base: '/another',
  server: {
    port: 3002,
    host: '0.0.0.0',
    proxy: {
      '/chat': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/chat/, '')
      },
    },
  },
  plugins: [react(), tsconfigPaths(), svgr({
    // svgr options: https://react-svgr.com/docs/options/
    svgrOptions: {
      // ...
    },
  
    // esbuild options, to transform jsx to js
    esbuildOptions: {
      // ...
    },
  
    // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
    include: '**/*.svg?react',
  
    //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
    exclude: ''
  })]
})
