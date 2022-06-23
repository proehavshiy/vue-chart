/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const analyticsModule = {
  state: () => ({
    inputData: {
      id: '',
    },
    siteId: '',
    analyticsData: [
      { date: '2020-07-01', visits: 213 },
      { date: '2020-07-02', visits: 249 },
      { date: '2020-07-03', visits: 179 },
      { date: '2020-07-04', visits: 170 },
      { date: '2020-07-05', visits: 184 },
      { date: '2020-07-06', visits: 202 },
      { date: '2020-07-07', visits: 198 },
      { date: '2020-07-08', visits: 168 },
      { date: '2020-07-09', visits: 176 },
      { date: '2020-07-10', visits: 171 },
      { date: '2020-07-11', visits: 190 },
      { date: '2020-07-12', visits: 154 },
      { date: '2020-07-13', visits: 246 },
      { date: '2020-07-14', visits: 250 },
      { date: '2020-07-15', visits: 227 },
      { date: '2020-07-16', visits: 140 },
      { date: '2020-07-17', visits: 170 },
      { date: '2020-07-18', visits: 125 },
      { date: '2020-07-19', visits: 106 },
      { date: '2020-07-20', visits: 207 },
      { date: '2020-07-21', visits: 222 },
      { date: '2020-07-22', visits: 198 },
      { date: '2020-07-23', visits: 204 },
      { date: '2020-07-24', visits: 213 },
      { date: '2020-07-25', visits: 145 },
      { date: '2020-07-26', visits: 166 },
      { date: '2020-07-27', visits: 163 },
      { date: '2020-07-28', visits: 135 },
      { date: '2020-07-29', visits: 45 },
    ],
    isLoading: false,
  }),
  getters: {
  },
  mutations: {
    setInputData(state, { inputType, value }) {
      state.inputData[inputType] = value;
    },
    setSiteId(state, value) {
      state.siteId = value;
    },
    setAnalyticsData(state, data) {
      state.analyticsDate = data;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
  },
  actions: {
    async fetchAnalyticsData({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get('https://track-api.leadhit.io/client/test_auth', {
          headers: {
            'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
            'Leadhit-Site-Id': state.inputData.id,
          },
        });
        console.log('response:', response);
        commit('setSiteId', state.inputData.id);
        console.log('state.inputData.id:', state.inputData.id);
      } catch (e) {
        console.log('error fetch:', e);
      } finally {
        commit('setInputData', { inputType: 'id', value: '' });
        commit('setLoading', false);
      }
    },
  },
  // namespaced: true,
};
