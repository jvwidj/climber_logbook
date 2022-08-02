import React from 'react'
import { Bar } from "react-chartjs-2"
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    } from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,

    );


const BoulderingDistribution = () => {

    const options = {
        indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Bouldering Grade Distribution',
    },
  },
    }

    const data = {
        labels: [
            "VB",
            "V0", 
            "V1", 
            "V2", 
            "V3", 
            "V4",
            "V5",
            "V6",
            "V7",
            "V8",
            "V9",
            "V10",
            "V11",
            "V12",
            "V13",
            "V14",
            "V15",],
        datasets: [{
            data: [12, 4, 2, 5, 2, 1, 10, 25, 30, 21, 12, 2, 1, 0, 2, 1 ,2], //Input data from server
            backgroundColor: [
                '#38e4ae'
            ],
            borderWidth: 0.5,
        }]
        }

  return (
    <div>
        <Bar options={options} data={data} />
    </div>
  )
}

export default BoulderingDistribution