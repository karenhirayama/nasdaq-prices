import { useEffect, useState } from 'react';
import './List.css'
import { Card } from './components';
import { Loading } from '../../components';
import { Link } from 'react-router-dom';

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
          <Link to='/nasdaq-stock/name' key='name' className="list__card">
            <Card />
          </Link>
        </div>
      }
    </>
  )
}

export default List;