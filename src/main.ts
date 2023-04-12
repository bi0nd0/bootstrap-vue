import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'; // import the Bootstrap CSS file
import './style.css'

import router from './router';
import App from './App.vue'
import MyPlugin from './plugins/MyPlugin';

const app = createApp(App)
app.use(router)
app.use(MyPlugin)

import { tooltip } from './directives'
app.directive('tooltip', tooltip)

app.mount('#app')
