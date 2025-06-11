import ForecastCard from '../../molecules/ForecastCard/ForecastCard';
import './DailyForecastContainer.css';

const DailyForecastContainer = () => {
  return (
    <div className='daily-container flex-container'>
      <h4>Previsión Diaria</h4>
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </div>
  );
};

export default DailyForecastContainer;
