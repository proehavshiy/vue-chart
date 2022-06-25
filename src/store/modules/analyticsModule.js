/* eslint-disable no-unused-vars */
import axios from 'axios';
import CONSTANTS from '@/constants/constants';

const { RESPONSE_URL, API_KEY, ANALYTICS_DATA } = CONSTANTS;

export const analyticsModule = {
  state: () => ({
    inputData: {
      id: '',
    },
    siteId: '',
    analyticsData: [],
    modalStatus: {
      status: false,
      message: '',
    },
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
      state.analyticsData = data;
    },
    setModalStatus(state, { status, message }) {
      state.modalStatus = { status, message };
    },
  },
  actions: {
    async fetchAnalyticsData({ state, commit }, callback) {
      try {
        const response = await axios.get(RESPONSE_URL, {
          headers: {
            'Api-Key': API_KEY,
            'Leadhit-Site-Id': state.inputData.id,
          },
        });
        const { data: { message } } = response;
        if (message === 'ok') {
          // установка siteId
          // в localStorage сохранится автоматически
          commit('setSiteId', state.inputData.id);
          // мок получения и записи данных для графика в стейт
          commit('setAnalyticsData', ANALYTICS_DATA);
          // редирект на страницу /analytics
          callback();
        }
      } catch (e) {
        commit('setModalStatus', { status: true, message: 'Ошибка: Неверный Leadhit-site-id' });
      } finally {
        commit('setInputData', { inputType: 'id', value: '' });
        setTimeout(() => {
          commit('setModalStatus', { status: false, message: '' });
        }, 2000);
      }
    },
  },
};
