import { FC } from 'react';
import './Card.css';

interface CardProps {
  name: string;
}

const Card: FC<CardProps> = ({ name }) => {
  return (
    <div className="card">
      <p className="card__name">{name}</p>
    </div>
  )
}

export default Card;