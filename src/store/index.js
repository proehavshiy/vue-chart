import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
// import axios from 'axios';
import { analyticsModule } from './modules/analyticsModule';

const localStorageCache = new VuexPersistence({
  key: 'analytics-app',
  storage: window.localStorage,
  // сохраняется только siteId при его мутации
  reducer: (state) => ({ siteid: state.analytics.siteId }),
  filter: (mutation) => mutation.type === 'setSiteId',
});

export default createStore({
  plugins: [localStorageCache.plugin],
  modules: {
    analytics: analyticsModule,
  },
  strict: process.env.NODE_ENV !== 'production',
});
