'use strict';

import fetchJsonData from "../fetchData";
import { getValuesFromFetchData, makeDataForChartConfig, makeConfigForChart } from './helpers';
import { Chart, LineElement, PointElement, LineController, CategoryScale,  LinearScale} from 'chart.js';

// required for rendering
Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
);

async function getChart(url, incompleteData, incompleteConfig, entryPoint) {
  const rawData = await fetchJsonData(url);
  const arraysOfCoordinates = await getValuesFromFetchData(rawData);
  const data  = await makeDataForChartConfig(incompleteData, arraysOfCoordinates);
  const config = await makeConfigForChart(incompleteConfig, data);

  let newChart = new Chart(entryPoint, config);
  return newChart;
};

export default getChart