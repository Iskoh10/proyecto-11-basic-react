import './CityByNameTemplate.css';
import { useEffect, useState } from 'react';
import SearchCityForm from '../../molecules/SearchCityForm/SearchCityForm';
import FullDataCard from '../../organisms/FullDataCard/FullDataCard';

const CityByNameTemplate = () => {
  const [cityAssignments, setCityAssignments] = useState(null);

  useEffect(() => {
    const storedCity = localStorage.getItem('chosenCity');
    if (storedCity) {
      const cityData = JSON.parse(storedCity);
      if (!cityData.error) {
        setCityAssignments(cityData);
      } else {
        localStorage.removeItem('chosenCity');
      }
    }
  }, []);

  const handleCityUpdate = (cityData) => {
    if (!cityData.error) {
      setCityAssignments(cityData);
      localStorage.setItem('chosenCity', JSON.stringify(cityData));
    } else {
      setCityAssignments(mull);
      localStorage.removeItem('chosenCity');
    }
  };

  return (
    <>
      <div className='input-city flex-container'>
        <SearchCityForm
          setCityAssignments={(cityData) => handleCityUpdate(cityData)}
        />
      </div>

      {cityAssignments ? (
        <FullDataCard cityData={cityAssignments} />
      ) : (
        <div className='empty-city flex-container'>
          <h2 className='choose-city-msg'>Elige tu ciudad</h2>
          <div className='city-icon flex-container'>
            <img src='../city-icon.png' alt='city-icon' />
          </div>
        </div>
      )}
    </>
  );
};

export default CityByNameTemplate;
