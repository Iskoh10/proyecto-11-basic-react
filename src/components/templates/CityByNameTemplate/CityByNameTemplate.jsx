import './CityByNameTemplate.css';
import { useEffect, useState } from 'react';
import SearchCityForm from '../../molecules/SearchCityForm/SearchCityForm';
import FullDataCard from '../../organisms/FullDataCard/FullDataCard';
import Button from '../../atoms/Button/Button';
import Modal from '../../molecules/Modal/Modal';
import { useLocation, useNavigate } from 'react-router-dom';

const CityByNameTemplate = ({ setIsLoading }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const cityQuery = params.get('q');

  const [cityAssignments, setCityAssignments] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const navigate = useNavigate();
  const countryID = 'ES';

  useEffect(() => {
    if (cityQuery) {
      setSearchInput(cityQuery);
    } else {
      const storedCity = localStorage.getItem('chosenCity');
      if (storedCity) {
        const cityData = JSON.parse(storedCity);
        if (!cityData.error) {
          setCityAssignments(cityData);
        } else {
          localStorage.removeItem('chosenCity');
        }
      }
    }
  }, [location.search]);

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
      <section className='input-city flex-container'>
        <SearchCityForm
          value={searchInput}
          onChange={setSearchInput}
          setCityAssignments={(cityData) => handleCityUpdate(cityData)}
          setIsLoading={setIsLoading}
        />
        <Button
          text='Ayuda'
          onClick={() => {
            setIsOpenModal(true);
          }}
          className='help'
        />
        <Modal isOpen={isOpenModal} className='help-modal'>
          <h2>¿Necesitas ayuda con las ciudades?</h2>
          <p>
            Haz click en dame, y te mostraré un listado de ciudades de España.
          </p>
          <Button
            text='Dame'
            onClick={() => {
              navigate(`/citiesByCountry/${countryID}`);
              setIsOpenModal(false);
            }}
          />
          <Button
            text='❌'
            onClick={() => setIsOpenModal(false)}
            className='close-btn'
          />
        </Modal>
      </section>

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
