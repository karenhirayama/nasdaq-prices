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

const HistoricalPrice: FC<any> = ({historicalPrice}) => {
  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
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
        label: `Name historical price`
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