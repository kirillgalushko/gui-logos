import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, relative, dirname, basename } from 'path'
import dts  from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(),
    dts(),
  ],
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        format: 'esm',
        dir: 'dist',
        manualChunks(id) {
          if (id.includes('.vue')) {
            const folder = relative(__dirname, dirname(id)).replace(/\\/g, '/').replace('build/', '');
            if (!folder) {
              return null
            }
            const fileName = basename(id, '.vue');
            return `${folder}/${fileName}`;
          }
        },
        chunkFileNames: (chunk) => {
          if (!chunk.facadeModuleId) {
            return '[name].js';
          }
          const folderName = dirname(chunk.facadeModuleId);
          const chunkName = basename(chunk.facadeModuleId, '.vue');
          return `${folderName}/${chunkName}.js`;
        },

      },
    },
    lib: {
      entry: resolve(__dirname, 'build/index.ts'),
      formats: ['es'],
      fileName: (format) => `gui-assets.${format}.js`,
    },
  },
})
