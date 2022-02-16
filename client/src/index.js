'use strict'

import { getChart } from './services';
import { dataForCurrentCpuUsageConfig, currentCpuUsageConfig } from './config';


const targetForFirstChart = document.getElementById('firstChart');

const URL = 'http://localhost:5000/';
const API = 'api/cpu_usage';

getChart(`${URL}${API}`, dataForCurrentCpuUsageConfig, currentCpuUsageConfig, targetForFirstChart)
