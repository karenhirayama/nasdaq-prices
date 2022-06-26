import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from './logo.png'

const Navbar = () => (
  <div className='navbar'>
    <Link to='/' className='navbar__link'>
      <img src={Logo} alt='Logo' className='navbar__logo' />
      Nasdaq Stock Market
    </Link>
  </div>
)

export default Navbar;