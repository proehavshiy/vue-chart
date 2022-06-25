<template>
  <div class="app__page analytics-page">
    <section-heading class="app__heading">Аналитика</section-heading>
    <Chart :data="analyticsData" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Chart from '@/components/Chart.vue';

export default {
  components: {
    Chart,
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
};
</script>

<style lang="scss">
.analytics-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
