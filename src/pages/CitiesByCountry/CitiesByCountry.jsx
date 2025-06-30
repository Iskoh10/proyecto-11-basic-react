import './CitiesByCountry.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CloudBg from '../../components/molecules/CloudBg/CloudBg';
import Message from '../../components/atoms/Message/Message';

const CitiesByCountry = ({ setIsLoading }) => {
  const { countryID } = useParams();
  const [list, setList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!countryID) return;

    const fetchCities = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          `http://localhost:3000/citiesByCountry/geonames/${countryID}`
        );

        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();

        if (!data) {
          setErrorMsg('Nose encontraron las ciudades');
        } else {
          setList(data);
        }
      } catch (error) {
        setErrorMsg(error.message || `Error de red, inténtalo más tarde`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, [countryID, setIsLoading]);

  useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => {
        setErrorMsg('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  const handleCityClick = (cityName) => {
    navigate(`/cityByName?q=${encodeURIComponent(cityName)}`);
  };

  return (
    <main className='list-cities flex-container'>
      {errorMsg ? (
        <Message text={errorMsg} />
      ) : list.length > 0 ? (
        <>
          <h2>Ciudades de España</h2>
          <div className='blur-card flex-container'>
            <ul className='ul-cities'>
              {list.map((city) => (
                <li
                  key={city.geonameId}
                  className='li-cities'
                  onClick={(e) => {
                    handleCityClick(e.target.textContent);
                  }}
                >
                  {city.toponymName}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Cargando ciudades...</p>
      )}
      <CloudBg />
    </main>
  );
};

export default CitiesByCountry;
