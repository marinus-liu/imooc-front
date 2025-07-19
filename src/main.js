import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/local/index'
createApp(App).use(router).mount('#app')