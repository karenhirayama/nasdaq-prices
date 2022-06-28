import axios from 'axios';
import { useState, useEffect } from 'react';
import { getStockHistoricalData } from '../../api/api';
import { HistoricalPrice, RangeTime } from "./components";

const Chart = () => {
  const [historicalPrice, setHistoricalPrice] = useState<any>([]);
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  const getHistoricalPrice = async () => {
    const { data } = await axios.get(getStockHistoricalData('AAPL'));
    console.log(data.data)
    setHistoricalPrice(data.data)
  };

  useEffect(() => {
   // getHistoricalPrice();
  },[])

  return (
    <div>
      <RangeTime />
      <HistoricalPrice historicalPrice={historicalPrice} />
    </div>
  )
}

export default Chart;