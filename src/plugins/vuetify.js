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
          primary: '#3abbd0',
          secondary: '#491d86',
          accent: '#323390',
        },
      },
      dark: {
        colors: {
          primary: '#3abbd0',
          secondary: '#2a0f4d',
          accent: '#323390',
        },
      },
    },
  },
})
