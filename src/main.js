import { createApp } from 'vue';
import store from '@/vuex/store';
import App from './App.vue';

createApp(App).use(store).mount('#app');
