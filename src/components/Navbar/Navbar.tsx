import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className='navbar'>
    <Link to='/' className='navbar__link'>Nasdaq Stock Market</Link>
  </div>
)

export default Navbar;