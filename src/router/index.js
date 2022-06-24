/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '@/pages/Auth-page.vue';
import AnalyticsPage from '@/pages/Analytics-page.vue';
import unpackLocalStorage from '@/utils/unpackLocalStorage';

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
    meta: {
      requireSiteId: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// защита роута
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireSiteId)) {
    const [isExist, { siteId }] = unpackLocalStorage('analytics-app-store');
    if (isExist) {
      if (siteId) next(true);
    } else {
      next(false);
    }
  } else {
    next();
  }
});

export default router;
