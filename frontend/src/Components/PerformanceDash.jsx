import React from 'react'
import BoulderingDistribution from './Performance/BoulderingDistribution'
import SessionChart from './Performance/SessionChart'


const PerformanceDash = () => {

  return (
    <div>
    <h4>PerformanceDash</h4>
    <SessionChart />
    <BoulderingDistribution />
    </div>
  )
}

export default PerformanceDash