import React from 'react'
import BoulderingDistribution from '../../Components/Performance/BoulderingDistribution'
import SessionChart from '../../Components/Performance/SessionChart'


const PerformancePage = () => {
  return (
    <div>PerformancePage
    <SessionChart />
    <BoulderingDistribution />
    </div>
  )
}

export default PerformancePage