import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '@/pages/Auth-page.vue';
import AnalyticsPage from '@/pages/Analytics-page.vue';
import ErrorPage from '@/pages/Error-page.vue';
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
  {
    path: '/:pathMatch(.*)*',
    name: 'errorPage',
    component: ErrorPage,
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
    if (isExist && siteId) {
      next(true);
    } else {
      // если siteId в localStorage нет / он пустой, то редирект на авторизацию
      next({ name: 'auth' });
    }
  } else {
    next(true);
  }
});

export default router;
