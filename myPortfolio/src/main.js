import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import Experience from "@/views/Experience.vue";
import "flag-icons/css/flag-icons.min.css";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/experience', component: Experience},
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ]
});

createApp(App).use(router).mount('#app')
