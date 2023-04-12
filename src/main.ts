import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'; // import the Bootstrap CSS file
import './style.css'

import router from './router';
import App from './App.vue'
import Plugin from './plugins/Plugin';

const app = createApp(App)
app.use(router)
app.use(Plugin)

app.mount('#app')
