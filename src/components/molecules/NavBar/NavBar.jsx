import './NavBar.css';
import CustomLink from '../../atoms/CustomLink/CustomLink';

const NavBar = () => {
  return (
    <ul className='ul-navbar'>
      <CustomLink link='/cities' nameLink='Ciudades' />
      <CustomLink link='/cityByName' nameLink='Ciudad por Nombre' />
      <CustomLink
        link='/countriesByContinent'
        nameLink='Paises por Continente'
      />
    </ul>
  );
};

export default NavBar;
