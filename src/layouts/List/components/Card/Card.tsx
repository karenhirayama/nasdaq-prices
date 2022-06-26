import './Card.css';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <Link to='/nasdaq-stock/name' className="card">
      <p className="card__name">company name should be the public name</p>
    </Link>
  )
}

export default Card;