import { Chart, LineElement, PointElement, LineController, CategoryScale, LinearScale} from 'chart.js';

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
);

const data = {
  labels: [1,2,3,4,5,6,7],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 2, 192)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data
};

const ctx1 = document.getElementById('firstChart');
const ctx2 = document.getElementById('secondChart');


const myChart1 = new Chart(ctx1, config);
const myChart2 = new Chart(ctx2, config);

