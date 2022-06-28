import axios from 'axios';
import { useState, useEffect } from 'react';
import { getStockHistoricalData } from '../../api/api';
import { HistoricalPrice, RangeTime } from "./components";
import { useParams } from 'react-router-dom';

const Chart = () => {
  const [historicalPrice, setHistoricalPrice] = useState<any>([]);
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const params = useParams();

  const getHistoricalPrice = async () => {
    const { data } = await axios.get(getStockHistoricalData(params?.stock_symbol as string));
    setHistoricalPrice(data.data)
  };

  useEffect(() => {
    getHistoricalPrice();
  }, [params]);

  return (
    <div>
      <RangeTime setInitialDate={setInitialDate} setFinalDate={setFinalDate} />
      <HistoricalPrice historicalPrice={historicalPrice} stockName={params?.stock_name} />
    </div>
  )
}

export default Chart;