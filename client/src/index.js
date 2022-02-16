'use strict'

import { runUpdatableChart } from './services';
import { dataForCurrentCpuUsageConfig, currentCpuUsageConfig } from './services/chart/config';


const targetForFirstChart = document.getElementById('firstChart');

const URL = 'http://localhost:5000/';
const API = 'api/cpu_usage';


runUpdatableChart(`${URL}${API}`, 
                  dataForCurrentCpuUsageConfig, 
                  currentCpuUsageConfig, 
                  targetForFirstChart, 
                  5000);

