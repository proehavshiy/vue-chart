/* eslint-disable camelcase */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export default function createChart(htmlEl, data) {
  const chart = am4core.create(htmlEl, am4charts.XYChart);

  chart.paddingRight = 20;

  chart.data = data;

  const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.grid.template.location = 0;

  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;
  valueAxis.renderer.minWidth = 35;

  const series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.dateX = 'date';
  series.dataFields.valueY = 'visits';

  series.tooltipText = '{valueY.value}';
  chart.cursor = new am4charts.XYCursor();

  const scrollbarX = new am4charts.XYChartScrollbar();
  scrollbarX.series.push(series);
  chart.scrollbarX = scrollbarX;

  return chart;
}
