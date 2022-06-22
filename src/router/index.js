import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '@/pages/Auth-page.vue';
import AnalyticsPage from '@/pages/Analytics-page.vue';

const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthPage,
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: AnalyticsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
