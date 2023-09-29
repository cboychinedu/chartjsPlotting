// Importing the necesary modules 
import React, { Component } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

// setting the labels 
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = [100, 200, 300, 400, 500, 600, 700, 800]

// Setting the data 
const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [300, 400, 145, 0.987, 0.345, 34.56, 234.56],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [100, 200, 300, 400, 500, 600, 405],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

let LinePlot = ()  => {
  return(
    <div className="lineDiv">
          <Line options={options} data={data} />
    </div>
  
  );
}

export default LinePlot; 
