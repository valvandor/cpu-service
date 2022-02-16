'use strict'

async function makeDataForChartConfig(dataForConfigChart, coordinates) {
  try {
    // y
    dataForConfigChart.datasets[0].data = coordinates.percentsArray;
    // x
    dataForConfigChart.labels = coordinates.datesArray;

    return dataForConfigChart;
  } catch(err) {
    console.log(err);
  }
}

export default makeDataForChartConfig