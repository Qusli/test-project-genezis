import { createApp } from 'vue';
import "@/assets/style/style.scss";
import App from './App.vue';
import { pinia } from "@/libs/store";

createApp(App)
    .use(pinia)
    .mount('#app');
