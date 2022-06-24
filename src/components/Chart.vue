<template>
  <div>
    <div class="chart" ref="chartdiv"></div>
  </div>
</template>

<script>
import createChart from '@/utils/createChart';

export default {
  name: 'linear-chart',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.chart = createChart(this.$refs.chartdiv, this.data, 'Аналитика по визитам');
  },
  onUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>
