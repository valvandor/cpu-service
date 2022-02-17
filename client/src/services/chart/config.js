'use strict'

const dataForCurrentCpuUsageConfig = {
  // labels: [],
  datasets: [{
    label: 'Current CPU usage',
    // data: [],
    fill: false,
    borderColor: 'rgb(75, 2, 192)',
    tension: 0.1
  }]
};

const dataForAverageCpuUsageConfig = {
  // labels: [],
  datasets: [{
    label: 'Average CPU usage (per minute)',
    // data: [],
    fill: false,
    borderColor: 'rgb(75, 92, 12)',
    tension: 0.1
  }]
};

const сpuUsageConfig = {
  type: 'line',
  // data: {},
  options: {
    plugins: {
        title: {
            display: true,
            // text: 'Chart Title',
        },
        legend: {
          display: true,
          labels: {
              color: 'rgb(255, 99, 132)'
          }
      }
    },
    scales: {
        y: {
            type: 'linear',
            min: 0,
            max: 100
        }
    }
  }
};


export { dataForCurrentCpuUsageConfig, dataForAverageCpuUsageConfig, сpuUsageConfig }