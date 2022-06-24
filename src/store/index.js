import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
// import axios from 'axios';
import { analyticsModule } from './modules/analyticsModule';

const siteIdCache = new VuexPersistence({
  key: 'analytics-app-store',
  storage: window.localStorage,
  // сохраняется только siteId и data при его мутации
  // modules: ['analytics'],
  reducer: (state) => ({
    siteId: state.analytics.siteId,
    data: state.analytics.analyticsData,
  }),
  filter: (mutation) => mutation.type === 'setSiteId' || mutation.type === 'setAnalyticsData',
});

export default createStore({
  plugins: [siteIdCache.plugin],
  modules: {
    analytics: analyticsModule,
  },
  strict: process.env.NODE_ENV !== 'production',
});
