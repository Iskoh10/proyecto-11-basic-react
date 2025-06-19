import './DailyForecastContainer.css';
import ForecastCard from '../../molecules/ForecastCard/ForecastCard';

const DailyForecastContainer = ({ days }) => {
  if (!days) {
    return null;
  }
  console.log(days);
  return (
    <div className='daily-container flex-container'>
      <h4>Previsión Diaria</h4>
      {days.map((day, index) => (
        <ForecastCard
          key={index}
          date={day.Date}
          minTemp={day.Temperature.Minimum.Value}
          maxTemp={day.Temperature.Maximum.Value}
          icon={day.Day.Icon}
          icon2={day.Night.Icon}
          phrase={day.Day.IconPhrase}
          phrase2={day.Night.IconPhrase}
        />
      ))}
    </div>
  );
};

export default DailyForecastContainer;
