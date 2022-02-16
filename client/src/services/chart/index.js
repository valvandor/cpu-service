'use strict'
import { renderChart, getNewConfig} from "./helpers";

async function runUpdatableChart(url, incompleteData, incompleteConfig, entryPoint, waitingInterval) {
  do {
    const config = await getNewConfig(url, incompleteData, incompleteConfig);

    let chart = await renderChart(config, entryPoint);

    await new Promise((resolve) => setTimeout(resolve, waitingInterval));

    chart.destroy()
  } while (true);
};


export default runUpdatableChart 
