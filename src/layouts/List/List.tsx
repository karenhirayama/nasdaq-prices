import { useEffect, useState } from 'react';
import './List.css'
import { Card } from './components';
import { Error, Loading } from '../../components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getListPerPage } from '../../api/api';

const List = () => {
  const [stocks, setStocks] = useState<any[]>(['name']);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1)

  const getData = async () => {
    try {
      const { data } = await axios.get(getListPerPage(page));
      setStocks(data.data);
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
    getData();
    setIsLoading(true);
  }, [page]);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  } else if (isError) {
    return (
      <>
        <Error />
      </>
    )
  } else {
    return (
      <>
        <div className='list'>
          <div className="list__cards">
            {stocks?.map((stock, index) => (
              <Link to={`/nasdaq-stock/${stock.symbol}/${stock.name}`} key={index} className="list__card" >
                <Card name={stock.name} />
              </Link>
            ))}
          </div>
          <div className="list__btn">
            {(page === 1) ? <button className='list__btn__disable'>Previous</button> :
              <button className='list__btn__previous' onClick={(e) => setPage(page - 1)}>Previous</button>
            }
            {(page === 125) ? <button className='list__btn__disable'>Next</button> :
              <button className='list__btn__next' onClick={(e) => setPage(page + 1)}>Next</button>
            }
          </div>
        </div>
      </>
    )
  }
};

export default List;