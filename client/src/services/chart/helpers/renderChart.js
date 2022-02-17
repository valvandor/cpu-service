'use strict';

import { Chart, LineElement, PointElement, LineController, 
  CategoryScale,  LinearScale, Title, Legend} from 'chart.js';

// required for correct rendering
Chart.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Title, Legend);

async function renderChart(config, entryPoint) {
  let newChart = new Chart(entryPoint, config);
  return newChart;
};


export default renderChart