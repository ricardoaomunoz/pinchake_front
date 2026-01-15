// Vuetify Documentation https://vuetifyjs.com

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VSparkline } from 'vuetify/labs/VSparkline'

export default createVuetify({
  components: {
    ...components,
    VSparkline,
  },
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#F5A000',
          secondary: '#6E8F7A',
          accent: '#8FAE8A',
          background: '#F7F7F4',
          surface: '#FFFFFF',
        },
      },
      dark: {
        colors: {
          primary: '#F5A000',
          secondary: '#2F3E35',
          accent: '#8FAE8A',
          background: '#111111',
          surface: '#1B1B1B',
        },
      },
    },
  },
})
