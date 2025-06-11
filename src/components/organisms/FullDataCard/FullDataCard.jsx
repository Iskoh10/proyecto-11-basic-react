import Slider from '../../molecules/Slider/Slider';
import DailyForecastContainer from '../DailyForecastContainer/DailyForecastContainer';
import './FullDataCard.css';

const FullDataCard = () => {
  const horas = [
    { hora: '12', temp: 21, precip: 0 },
    { hora: '13', temp: 22, precip: 10 },
    { hora: '14', temp: 23, precip: 20 },
    { hora: '15', temp: 24, precip: 30 },
    { hora: '16', temp: 25, precip: 35 },
    { hora: '17', temp: 23, precip: 20 },
    { hora: '18', temp: 24, precip: 30 },
    { hora: '19', temp: 25, precip: 35 }
  ];

  return (
    <>
      <section className='info-card flex-container'>
        <h2>Nombre de la Ciudad</h2>
        <p>Todos los datos y el carrusel del tiempo por horas</p>
        <div className='weather-header flex-container'>
          <div className='weather-img'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/13434/13434972.png'
              alt='iconos del tiempo'
            />
          </div>
          <div className='temperature temp-by-city'>
            20
            <span className='degree'>°</span>
            <span className='unit'>C</span>
          </div>
        </div>
        <div className='info-data flex-container'>
          <p>
            Sensación térmica: <span>26ºC</span>
          </p>
          <p>
            Viento: <span>6 km/h</span>
          </p>
          <p>
            Ráfagas de viento: <span>11 km/h</span>
          </p>
          <p>
            Calidad del aire: <span>Mala</span>
          </p>
        </div>
        <Slider horas={horas} />
        <DailyForecastContainer />
      </section>
    </>
  );
};

export default FullDataCard;
