// src/components/WPMChart.tsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const WPMChart = ({ dataPoints }) => {
  const data = {
    labels: dataPoints.map((_, i) => `${i + 1}s`),
    datasets: [
      {
        label: 'WPM',
        data: dataPoints,
        fill: false,
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4
      }
    ]
  };

  return (
    <div className="mt-4">
      <Line data={data} />
    </div>
  );
};

export default WPMChart;
