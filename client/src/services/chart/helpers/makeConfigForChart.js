'use strict'

async function makeDataForChart(configForChart, dataForChart, currentDate) {
  try {
    configForChart.data = dataForChart;
    configForChart.options.plugins.title['text'] = currentDate;
    return configForChart;
  } catch(err) {
    console.log(err);
  }
}

export default makeDataForChart