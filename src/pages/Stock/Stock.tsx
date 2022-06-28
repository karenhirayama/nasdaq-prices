import { Link, useParams } from "react-router-dom";
import { Chart } from '../../layouts';
import './Stock.css';

const Stock = () => {
  const params = useParams();

  return (
    <div className='stock'>
      <div className="stock__header">
        <Link to='/'>Go back</Link>
      </div>
      <div className="stock__name">
        <h1>{params?.stock_name} - Historical stock price</h1>
      </div>
      <div className="stock__chart">
        <Chart />
      </div>
    </div>
  )
}

export default Stock;