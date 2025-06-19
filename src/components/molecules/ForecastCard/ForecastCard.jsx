import './ForecastCard.css';

const ForecastCard = ({
  date,
  minTemp,
  maxTemp,
  icon,
  icon2,
  phrase,
  phrase2
}) => {
  const dateObj = new Date(date);

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab'];
  const day = dayNames[dateObj.getDay()];
  const dayNum = dateObj.getDate();
  const month = dateObj.getMonth() + 1;

  return (
    <div className='forecast-card flex-container'>
      <div className='day flex-container'>
        <p>{day}</p>
        <p>
          {dayNum}/{month}
        </p>
      </div>
      <div className='day-temp flex-container'>
        <img
          src={`https://www.awxcdn.com/adc-assets/images/weathericons/${icon}.svg`}
          alt={phrase}
        />
        <div className='temp-range flex-container'>
          <p>Max: {maxTemp} °C</p>
          <p>Min: {minTemp} °C</p>
        </div>
      </div>
      <div className='day-description flex-container'>
        <p className='day-time'>{phrase}</p>
        <div className='at-night flex-container'>
          <img
            src={`https://www.awxcdn.com/adc-assets/images/weathericons/${icon2}.svg`}
            alt={phrase2}
          />
          <p>{phrase2}</p>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
