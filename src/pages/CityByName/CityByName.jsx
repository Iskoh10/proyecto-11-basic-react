import './CityByName.css';
import CloudBg from '../../components/molecules/CloudBg/CloudBg';
import CityByNameTemplate from '../../components/templates/CityByNameTemplate/CityByNameTemplate';

const CityByName = ({ setIsLoading }) => {
  return (
    <main className='city-by-name flex-container'>
      <CityByNameTemplate setIsLoading={setIsLoading} />
      <CloudBg />
    </main>
  );
};

export default CityByName;
