import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Logo from './assets/logo.png';
import Cart from '../public/cart.svg';
import './Header.css'

function Nav() {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const navChange = (event) => {
    const path = event.target.value;
    if (path) {
        navigate(path);
    }
  }

  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" width={40} />
          <div className="brand">UbiTechy</div>
        </div>

        <ul className="nav-links">
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/shop'>SHOP</Link></li>
          <li><Link to='/about'>WHO ARE WE?</Link></li>
          <li><Link to='/contacts'>CONTACT US</Link></li>
        </ul>

        <Link className='cartIcon' to='/cart'>
          <img src={Cart} alt="Store Cart Icon" width={30} />
          <div>{cartCount}</div>
        </Link>

        <select name="nav-drop" id="nav-drop" onChange={navChange} defaultValue=''>
            <option value="" disabled></option>
            <option value="/">Home</option>
            <option value="/shop">Shop</option>
            <option value="/about">Who are we?</option>
            <option value="/contacts">Contact us!</option>
        </select>
      </header>
    </>
  )
}

export default Nav;
