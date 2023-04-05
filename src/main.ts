import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'; // import the Bootstrap CSS file
import './style.css'
import App from './App.vue'

const app = createApp(App)

import { tooltip } from './directives'
app.directive('tooltip', tooltip)

app.mount('#app')
