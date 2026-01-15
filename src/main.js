import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const modules = import.meta.glob('@/components/base/*.vue')

const app = createApp(App)
app.use(router)
app.use(vuetify)

for (const file of Object.keys(modules)) {
  const name = file
    .replace(/index.js/, '')
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .replace('components/', '')
  const componentName = upperFirst(camelCase(name))
  app.component(`Base${componentName}`)
}

app.mount('#app')
