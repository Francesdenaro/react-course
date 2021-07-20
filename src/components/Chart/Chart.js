import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = () => {
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={value} 
          label={dataPoint.label} />))}
    </div>
  )
}

export default Chart
