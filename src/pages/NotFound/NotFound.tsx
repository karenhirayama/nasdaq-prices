import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => (
  <div className='notfound'>
    <h1>Page not found!</h1>
    <Link to='/'>Click here to return to Homepage.</Link>
  </div>
)

export default NotFound;