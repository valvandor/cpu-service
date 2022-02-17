'use strict';

import fetchJsonData from "../../fetchData";
import { getValuesFromFetchData, makeDataForChartConfig, makeConfigForChart } from '.';

async function getNewConfig(url, incompleteData, incompleteConfig) {
  const rawData = await fetchJsonData(url);
  const [arraysOfCoordinates, currentDate] = await getValuesFromFetchData(rawData);
  const data = await makeDataForChartConfig(incompleteData, arraysOfCoordinates);
  const config = await makeConfigForChart(incompleteConfig, data, currentDate);
  return config;
};

export default getNewConfig
