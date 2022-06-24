/* eslint-disable no-param-reassign */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';
import ruLocale from '@amcharts/amcharts4/lang/ru_RU';

am4core.useTheme(am4themesAnimated);

const setChartHeading = (chart, text) => {
  const title = chart.titles.create();
  title.text = text;
  title.fontSize = 25;
  title.marginBottom = 30;

  return title;
};

const defineLineSeries = (chart, fieldNameX, fieldNameY) => {
  const series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.dateX = fieldNameX;
  series.dataFields.valueY = fieldNameY;

  series.stroke = am4core.color('#3F3F3F');
  series.properties.fill = am4core.color('#3F3F3F');

  series.tooltipText = '{valueY.value}';
  series.tooltip.getFillFromObject = false;
  series.tooltip.background.fill = am4core.color('#7BAE73');

  // bullets
  const bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.radius = 2;

  return series;
};

const defineCursor = (chart) => {
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.lineY.disabled = true;
};

const defineScrollBar = (chart, series) => {
  const scrollbarX = new am4charts.XYChartScrollbar();
  scrollbarX.series.push(series);
  chart.scrollbarX = scrollbarX;
  chart.scrollbarX.parent = chart.bottomAxesContainer;
  chart.scrollbarX.background.fill = am4core.color('#B4B4B4');
  chart.scrollbarX.background.fillOpacity = 0.2;

  // custom scrollbar axis
  const scrollAxis = chart.scrollbarX.scrollbarChart.xAxes.getIndex(0);
  scrollAxis.renderer.labels.template.disabled = true;
  scrollAxis.renderer.grid.template.disabled = true;
  chart.scrollbarX.minHeight = 10;

  return scrollbarX;
};

export default function createChart(rootHtmlEl, data, heading) {
  const chart = am4core.create(rootHtmlEl, am4charts.XYChart);
  chart.language.locale = ruLocale;

  chart.paddingRight = 20;
  chart.data = data;

  const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.grid.template.disabled = true;

  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = 'Визиты';
  valueAxis.title.fontWeight = 'bold';
  valueAxis.renderer.grid.template.disabled = true;

  valueAxis.tooltip.disabled = true;
  valueAxis.renderer.minWidth = 35;

  // series
  const series = defineLineSeries(chart, 'date', 'visits');

  // heading
  setChartHeading(chart, heading);

  // cursor
  defineCursor(chart);

  // scrollbar
  defineScrollBar(chart, series);

  return chart;
}
