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
    themes: {
      light: {
        colors: {
          primary: '#42a5f6',
          secondary: '#050B1F',
          accent: '#204165',
        },
      },
      dark: {
        colors: {
          primary: '#50778D',
          secondary: '#0B1C3D',
          accent: '#204165',
        },
      },
    },
  },
})
