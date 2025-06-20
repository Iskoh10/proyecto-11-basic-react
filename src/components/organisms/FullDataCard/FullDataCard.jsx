import Slider from '../../molecules/Slider/Slider';
import DailyForecastContainer from '../DailyForecastContainer/DailyForecastContainer';
import './FullDataCard.css';

const FullDataCard = ({ cityData }) => {
  if (!cityData) {
    return null;
  }

  return (
    <>
      <section className='info-card flex-container'>
        <h2>{cityData.nameCity}</h2>
        <div className='weather-header flex-container'>
          <div className='weather-img'>
            <img
              src={`https://developer.accuweather.com/sites/default/files/${cityData.weatherIcon}-s.png`}
              alt={cityData.weatherText}
            />
          </div>
          <div className='temperature temp-by-city'>
            <p>{cityData.temperature}</p>
            <span className='degree'>°</span>
            <span className='unit'>C</span>
          </div>
        </div>
        <div className='info-data flex-container'>
          <p>
            Sensación térmica <span>{cityData.realFeel} °C</span>
          </p>
          <p>
            Viento <span>{cityData.wind} km/h</span>
          </p>
          <p>
            Ráfagas de viento <span>{cityData.windGusts} km/h</span>
          </p>
          <p>
            Visibilidad <span>{cityData.visibility} km</span>
          </p>
          <p>
            Humedad <span>{cityData.humidity} %</span>
          </p>
          <p>
            Presión <span>{cityData.pressure} km</span>
          </p>
        </div>
        <Slider hours={cityData.hourlyForecast} />
        <DailyForecastContainer days={cityData.dailyForecast} />
      </section>
    </>
  );
};

export default FullDataCard;
