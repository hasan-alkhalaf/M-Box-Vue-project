import { createApp } from 'vue'
import style from './assets/scss/main.scss';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';

library.add(fas)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');

