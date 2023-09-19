import { Link } from 'react-router-dom';
import CoffeeLogo from '../images/logo.svg';
import './Header.css';
import CartIcon from '../images/cart.svg';

function Header( {cart}){
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return(
    <header className="header-component">
      <Link to="/">
        <img src={CoffeeLogo} alt="coffee logo" />
        <h1>Code Cafe</h1>
        </Link>
        <div className="menu">
          <Link to="/cart">
            <img src={CartIcon} alt="Cart" />
            <div className="badge">{cartQuantity}</div>
          </Link>
        </div>
    </header>
  );
}
export default Header;