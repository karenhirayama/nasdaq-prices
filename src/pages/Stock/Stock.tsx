import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Chart } from '../../layouts';

const Stock = () => {
  const [stockInfo, setStockInfo] = useState([]);
  const params = useParams();

  return (
    <div>
      <div className="stock__header">
        <Link to='/'>Go back</Link>
        <h1>Name</h1>
      </div>
      <div className="stock__chart">
        <Chart />
      </div>
    </div>
  )
}

export default Stock;