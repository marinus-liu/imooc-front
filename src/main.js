import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/utils/veevalidate'
import axios from 'axios'

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production' ) ? 'http://localhost:3000' : 'http://your.domain.com'
createApp(App).use(router).mount('#app')