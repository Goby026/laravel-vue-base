import { createRouter, createWebHistory } from 'vue-router';

import marcas from "../components/marcas/index.vue";
import App from "../components/App.vue";
import notFound from "../components/notFound.vue";


const routes = [
    { path: '/', component: marcas },
    // { path: '/marcas', component: marcas },
    { path: '/:pathMatch(.*)*', component: notFound },
];

console.log('cargo router');

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
