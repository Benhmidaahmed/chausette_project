// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import ChausetteView from '../views/chausetteView.vue';
import ContactView from '../views/ContactView.vue';


const routes = [
  { path: '/', name: 'Home', component: AboutView },
  { path: '/chausette', name: 'Chausette', component: ChausetteView },
  { path: '/contact', name: 'Contact', component: ContactView },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
