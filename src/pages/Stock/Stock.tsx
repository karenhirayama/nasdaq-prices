import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Chart } from '../../layouts';
import './Stock.css';

const Stock = () => {
  const [stockInfo, setStockInfo] = useState([]);
  const params = useParams();

  return (
    <div className='stock'>
      <div className="stock__header">
        <Link to='/'>Go back</Link>
      </div>
      <div className="stock__name">
        <h1>Company name should be the public name</h1>
      </div>
      <div className="stock__chart">
        <Chart />
      </div>
    </div>
  )
}

export default Stock;