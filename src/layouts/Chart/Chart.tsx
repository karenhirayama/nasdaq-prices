import axios from 'axios';
import { useState, useEffect } from 'react';
import { getStockHistoricalData } from '../../api/api';
import { HistoricalPrice, RangeTime } from "./components";
import { useParams } from 'react-router-dom';

const Chart = () => {
  const [historicalPrice, setHistoricalPrice] = useState<any>([]);
  const [ searchByDate, setSearchByDate] = useState<any>({
    initialDate: new Date().toISOString().substr(0, 10) as any,
    finalDate: new Date().toISOString().substr(0, 10) as any
  });
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
      <RangeTime searchByDate={searchByDate} setSearchByDate={setSearchByDate} />
      <HistoricalPrice historicalPrice={historicalPrice} stockName={params?.stock_name} />
    </div>
  )
}

export default Chart;