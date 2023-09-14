import CoffeeLogo from '../images/logo.svg';
import './Header.css';

function Header(){
  return(
    <header className="header-component">
      <img src={CoffeeLogo} alt="Coffee Logo" />
      <h1>Code Cafe</h1>
    </header>
  );
}
export default Header;