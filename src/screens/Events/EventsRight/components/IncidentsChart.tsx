import React, {useEffect, useRef, useState} from 'react';
import {Line} from "react-chartjs-2";

const options = {
  scales: {
    xAxes: [{
      display: false
    }]
  },
  legend: {
    display: false
  },
};

export function IncidentsChart() {
  const ref = useRef(null);
  const [chardData, setData] = useState({});

  useEffect(() => {
    if (ref.current) {
      let chart = ref.current;
      if (chart) {
        let ctx: any = chart['chartInstance']['ctx']
        ctx = ctx.canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(25, 144, 234, 0.5)');
        gradient.addColorStop(1, 'rgba(25, 144, 234, 0.1)');
        const data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              fill: true,
              backgroundColor: gradient,
              borderColor: '#2B9FF7',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 0,
              pointHoverRadius: 0,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 0,
              pointRadius: 0,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40]
            }
          ]
        };
        setData(data)
      }

    }
  }, []);
  return (
    <Line ref={ref} options={options} data={chardData} height={200}/>
  )
}


