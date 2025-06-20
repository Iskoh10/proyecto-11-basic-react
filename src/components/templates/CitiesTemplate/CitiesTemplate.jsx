import './CitiesTemplate.css';
import { useEffect, useState } from 'react';
import Modal from '../../molecules/Modal/Modal';
import Button from '../../atoms/Button/Button';
import SearchCityForm from '../../molecules/SearchCityForm/SearchCityForm';

const CitiesTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [cityAssignments, setCityAssignments] = useState({
    cityOne: null,
    cityTwo: null,
    cityThree: null,
    cityFour: null
  });

  const cityKeys = ['cityOne', 'cityTwo', 'cityThree', 'cityFour'];

  useEffect(() => {
    const storedCity = localStorage.getItem('cityAssignments');
    if (storedCity) {
      setCityAssignments(JSON.parse(storedCity));
    }
  }, []);

  const handleCityUpdate = (key, cityData) => {
    if (cityData?.error) {
      const updated = { ...cityAssignments, [key]: null };
      setCityAssignments(updated);
      localStorage.setItem('cityAssignments', JSON.stringify(updated));
    }

    const updated = { ...cityAssignments, [key]: cityData };
    setCityAssignments(updated);
    localStorage.setItem('cityAssignments', JSON.stringify(updated));
  };

  const uvIndexTranslated = {
    Low: 'Bajo',
    Moderate: 'Moderado',
    High: 'Alto',
    'Very High': 'Muy Alto',
    Extreme: 'Extremo'
  };

  const translate = (level) => uvIndexTranslated[level] || level;

  return (
    <section className='cities-container grid-container'>
      {cityKeys.map((key, index) => {
        const city = cityAssignments[key];
        return (
          <div
            key={key}
            className={`${key} flex-container`}
            onClick={() => {
              setSelectedBox(key);
              setIsModalOpen(true);
            }}
          >
            {city ? (
              <>
                <h2 className='name-city'>{city.nameCity}</h2>
                <div className='weather-day flex-container'>
                  <img
                    src={`https://developer.accuweather.com/sites/default/files/${city.weatherIcon}-s.png`}
                    alt={city.weatherText}
                  />
                </div>
                <div className='temperature'>
                  <span className='value-temp'>{city.temperature}</span>
                  <span className='degree'>°</span>
                  <span className='unit'>C</span>
                </div>

                <div className='data flex-container'>
                  <div className='properties flex-container'>
                    <p>Sensación térmica</p>
                    <p>Viento</p>
                    <p>Ráfagas de viento</p>
                    <p>Índice UV</p>
                    <p>Humedad</p>
                    <p>Visibilidad</p>
                    <p>Presión</p>
                  </div>
                  <div className='values flex-container'>
                    <p>{city.realFeel} °C</p>
                    <p>{city.wind} km/h</p>
                    <p>{city.windGusts} km/h</p>
                    <p>{translate(city.uvIndexText)}</p>
                    <p>{city.humidity} %</p>
                    <p>{city.visibility} km</p>
                    <p>{city.pressure} mb</p>
                  </div>
                </div>
              </>
            ) : (
              <h2>{`Ciudad ${index + 1}`}</h2>
            )}
          </div>
        );
      })}

      <Modal isOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
        <h2>Cambiar Ciudad</h2>
        <SearchCityForm
          setCityAssignments={(cityData) =>
            handleCityUpdate(selectedBox, cityData)
          }
          selectedBox={selectedBox}
          setIsModalOpen={setIsModalOpen}
        />
        <Button
          text={'Cerrar'}
          className='close-modal-btn'
          onClick={() => setIsModalOpen(false)}
        />
      </Modal>
    </section>
  );
};

export default CitiesTemplate;
