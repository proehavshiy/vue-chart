<template>
  <div>
    <h1>Analytics page</h1>
    <Chart :data="analyticsData" />
    <main-button @click="logOut">Выйти</main-button>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Chart from '@/components/Chart.vue';
import { mapState, mapMutations } from 'vuex';
import unpackLocalStorage from '@/utils/unpackLocalStorage';
import MainButton from '@/components/UI/MainButton.vue';

export default {
  components: {
    Chart,
    MainButton,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      analyticsData: (state) => state.analytics.analyticsData,
    }),
  },
  methods: {
    ...mapMutations({
      setAnalyticsData: 'setAnalyticsData',
      setSiteId: 'setSiteId',
    }),
    logOut() {
      // если при изменении не будет в localstorage siteId, произойдет редирект на auth
      this.setAnalyticsData([]);
      this.setSiteId('');
      const [isExist, { siteId }] = unpackLocalStorage('analytics-app-store');
      if (isExist && !siteId) this.$router.push({ name: 'auth' });
    },
  },
};
</script>

<style lang="scss">
</style>
