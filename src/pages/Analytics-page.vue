<template>
  <div>
    <h1>Analytics page</h1>
    <Chart :data="analyticsData" />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Chart from '@/components/Chart.vue';
import { mapState } from 'vuex';

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
  methods: {
  },
};
</script>

<style lang="scss">
</style>
