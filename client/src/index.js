'use strict'

import { runUpdatableChart } from './services';
import { dataForCurrentCpuUsageConfig, dataForAverageCpuUsageConfig, сpuUsageConfig } from './services/chart/config';


const targetForCurrentCpuUsageChart = document.getElementById('firstChart');
const targetForAverageCpuUsageChart = document.getElementById('secondChart');

const URL = 'http://localhost:5000/';
const APIForCurrentCpuUsageChart = 'api/cpu_usage';
const APIForAverageCpuUsageChart = 'api/average_cpu_usage'

const intervalForUpdateCurrentCpuUsageChart = 5000
const intervalForAverageCurrentCpuUsageChart = 60000


runUpdatableChart(`${URL}${APIForCurrentCpuUsageChart}`, 
                  dataForCurrentCpuUsageConfig, 
                  сpuUsageConfig, 
                  targetForCurrentCpuUsageChart, 
                  intervalForUpdateCurrentCpuUsageChart);

runUpdatableChart(`${URL}${APIForAverageCpuUsageChart}`, 
                  dataForAverageCpuUsageConfig, 
                  сpuUsageConfig, 
                  targetForAverageCpuUsageChart, 
                  intervalForAverageCurrentCpuUsageChart);
