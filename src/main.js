 // 
import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router/index.js'
const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(vuetify).use(router).mount('#app')

 

// instead of using a for link use <Router Link> </Router Link>

