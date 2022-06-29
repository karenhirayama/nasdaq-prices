import axios from 'axios';
import { useState, useEffect } from 'react';
import { getStockHistoricalData, getStockHistoricalByDate } from '../../api/api';
import { HistoricalPrice, RangeTime } from "./components";
import { useParams } from 'react-router-dom';
import { Error, Loading } from '../../components';

const Chart = () => {
  const [historicalPrice, setHistoricalPrice] = useState<any>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchByDate, setSearchByDate] = useState<any>({
    initialDate: new Date().toISOString().substr(0, 10) as any,
    finalDate: new Date().toISOString().substr(0, 10) as any
  });
  const params = useParams();

  const getHistoricalPrice = async () => {
    try {
      const { data } = await axios.get(getStockHistoricalData(params?.stock_symbol as string));
      setHistoricalPrice(data.data);
      setIsLoading(false);
      if (data.data.length === 0) {
        setIsError(true)
      };
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    };
  };

  const getHistoricalPriceByDate = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(getStockHistoricalByDate(params?.stock_symbol as string, searchByDate.initialDate, searchByDate.finalDate));
      setHistoricalPrice(data.data);
      setIsLoading(false);
      if (data.data.length === 0) {
        setIsError(true)
      };
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    };
  };

  useEffect(() => {
    getHistoricalPrice();
  }, [params]);

  if (isLoading) {
    return (<>
      <Loading />
    </>)
  } else if (isError) {
    return (
      <>
        <Error />
      </>
    )
  } else {
    return (
      <div>
        <RangeTime
          searchByDate={searchByDate}
          setSearchByDate={setSearchByDate}
          getHistoricalPriceByDate={getHistoricalPriceByDate}
          handleClearSearch={getHistoricalPrice}
        />
        <HistoricalPrice
          historicalPrice={historicalPrice}
          stockName={params?.stock_name}
        />
      </div>
    )
  };
};

export default Chart;