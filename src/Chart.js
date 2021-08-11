import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart() {
    const data = React.useMemo(
      () => [
        [[1, 10], [2, 10], [3, 10]],
        [[1, 20], [2, 8], [3, 12]],
        [[1, 30], [2, 10], [3, 6]]
      ],
      []
    )
   
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )
   
    return (
      <div
        style={{
          width: '400px',
          height: '300px'
        }}
      >
        <Chart data={data} axes={axes} />
      </div>
    )
  }


export default MyChart;