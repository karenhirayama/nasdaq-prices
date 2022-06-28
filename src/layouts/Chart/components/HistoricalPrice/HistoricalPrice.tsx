import { FC } from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoricalPrice: FC<any> = ({historicalPrice, stockName}) => {
  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    yAxis: {
      position: 'right',
      ticks: {
        color: 'blue'
      }
    },
    xAis: {
      ticks: {
        color: '#2046f5',
      }
    }
  },
};
  const data = {
    labels: historicalPrice?.map((price: any) => {
      let date = price.date.split('T')[0]
      return date;
    }),
    datasets: [
      {
        data: historicalPrice?.map((price: any) => price.close),
        label: `${stockName} historical price (US$)`,
        borderColor: '#2046f5',
        backgroundColor: '#2046f5',
        fill: true,
      }
    ]
  };

  return (
    <div>
      <Line options={options as any} data={data as any} />
    </div>
  )
}

export default HistoricalPrice;