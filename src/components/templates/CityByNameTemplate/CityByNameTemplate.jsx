import SearchCityForm from '../../molecules/SearchCityForm/SearchCityForm';
import FullDataCard from '../../organisms/FullDataCard/FullDataCard';
import './CityByNameTemplate.css';

const CityByNameTemplate = () => {
  return (
    <>
      <div className='input-city flex-container'>
        <SearchCityForm />
      </div>
      <FullDataCard />
    </>
  );
};

export default CityByNameTemplate;
