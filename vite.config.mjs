import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      // Additional Vue options
      compilerOptions: {
        // Enable Vue 3 JSX support with Composition API
        jsx: { compositionAPI: true },
      },
      // Enable runtime compiler
      runtimeCompiler: true,
    }),
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/variables.scss',
      },
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          'vuetify': [
            'useDisplay',
            'useTheme',
            'useLayout',
          ]
        }
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      includes: ['./src/views/**/*.vue'],
      dts: 'src/components.d.ts',
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  build: {
    chunkSizeWarningLimit: 1024 * 1024, // Set the limit to 1 MB
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: ['./src/**/*.vue'],
  },

  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
  },
})
