'use strict';

import { Chart, LineElement, PointElement, LineController, CategoryScale,  LinearScale} from 'chart.js';

// required for rendering
Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
);

async function renderChart(config, entryPoint) {
  let newChart = new Chart(entryPoint, config);
  return newChart;
};



export default renderChart