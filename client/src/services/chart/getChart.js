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

function getChart(url, dataForConfig, configForChart, entryPoint) {
  fetchJsonData(url)
    .then(
      response => {
        return getValuesFromFetchData(response);
      }
    )
    .then(
      values => {
        return makeDataForChartConfig(dataForConfig, values);
      }
    )
    .then(
      data => {
        return makeConfigForChart(configForChart, data);
      }
    )
    .then(
      config => {
        new Chart(entryPoint, config);
      }
    );
};

export default getChart