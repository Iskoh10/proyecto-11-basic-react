import './Header.css';
import Logo from '../../atoms/Logo/Logo';
import NavBar from '../../molecules/NavBar/NavBar';

const Header = () => {
  return (
    <header className='header flex-container'>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
