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

const currentCpuUsageConfig = {
  type: 'line',
  // data: {},
  options: {
    plugins: {
        title: {
            display: true,
            text: 'Chart Title'
        },
        legend: {
          display: true,
          labels: {
              color: 'rgb(255, 99, 132)'
          }
      }
    },
    scales: {
    //     x: {
    //         type: 'linear'
    //     },
        y: {
            type: 'linear',
            min: 0,
            max: 100
        }
    }
  }
};


export { dataForCurrentCpuUsageConfig, currentCpuUsageConfig }