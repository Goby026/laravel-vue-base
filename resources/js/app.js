require('./bootstrap');

import { createApp } from 'vue';

import App from './components/App.vue';

import router from "./router/index";

const app = createApp({});

app.use(router);

app.component('app', App);

app.mount('#app');
