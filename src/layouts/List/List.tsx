import { useEffect, useState } from 'react';
import './List.css'
import { Card } from './components';
import { Loading } from '../../components';

const List = () => {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? <Loading /> :
        <div className='list'>
          <div className="list__card">
            <Card />
          </div>
          <div className="list__card">
            <Card />
          </div>
          <div className="list__card">
            <Card />
          </div>
          <div className="list__card">
            <Card />
          </div>
          <div className="list__card">
            <Card />
          </div>
        </div>
      }
    </>
  )
}

export default List;