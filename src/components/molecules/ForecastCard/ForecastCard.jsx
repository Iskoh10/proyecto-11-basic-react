import './ForecastCard.css';

const ForecastCard = () => {
  return (
    <div className='forecast-card flex-container'>
      <div className='day'>
        <p>Sab</p>
        <p>7/6</p>
      </div>
      <div className='day-temp flex-container'>
        <p>🌘</p>
        <p>33 °</p>
        <p>17 °</p>
      </div>
      <div className='day-description flex-container'>
        <p className='day-time'>Parcialmente soleado y cálido</p>
        <div className='at-night flex-container'>
          <p>🌛</p>
          <p>Claro</p>
        </div>
      </div>
      <div className='day-precipitation flex-container'>
        <p>💧</p>0%
      </div>
    </div>
  );
};

export default ForecastCard;
