import { createStore } from 'vuex';
import { analyticsModule } from './modules/analyticsModule';

export default createStore({
  modules: {
    analytics: analyticsModule,
  },
});
