import './assets/main.css'

// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);
app.use(router);
app.mount('#app');
