import './NavBar.css';
import CustomLink from '../../atoms/CustomLink/CustomLink';

const NavBar = () => {
  return (
    <ul className='ul-navbar'>
      <CustomLink link='/cities' nameLink='Ciudades' />
      <CustomLink link='/cityByName' nameLink='Ciudad por Nombre' />
    </ul>
  );
};

export default NavBar;
