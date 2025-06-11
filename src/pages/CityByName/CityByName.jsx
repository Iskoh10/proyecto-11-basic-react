import CloudBg from '../../components/molecules/CloudBg/CloudBg';
import CityByNameTemplate from '../../components/templates/CityByNameTemplate/CityByNameTemplate';
import './CityByName.css';

const CityByName = () => {
  return (
    <main className='city-by-name flex-container'>
      <CityByNameTemplate />
      <CloudBg />

      <h2>Ciudades por nombre</h2>
      <p>Buscador de ciudades por su nombre</p>
    </main>
  );
};

export default CityByName;
