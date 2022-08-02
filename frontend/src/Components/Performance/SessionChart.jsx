import React from 'react'
import { Doughnut } from "react-chartjs-2"
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
Chart.register(ArcElement, Tooltip);

const SessionChart = () => {
const data = {
    labels: ["Bouldering", "Sport", "Trad"],
    datasets: [{
        data: [12, 4,2], //Input data from server
        backgroundColor: [
            '#38e4ae',
            "#7bd389",
            '#AEDCC0',],
        borderWidth: .5,
    }]
    }

  return (
    <div>
    
        <div style={{width:"10rem", margin:" 0 auto "}}>
            session
            <Doughnut data={data} />
        </div>
    </div>
  )
}

export default SessionChart