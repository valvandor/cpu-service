'use strict'

async function makeDataForChart(configForChart, dataForChart) {
  try {
    configForChart.data = dataForChart;
    return configForChart;
  } catch(err) {
    console.log(err)
  }
}

export default makeDataForChart