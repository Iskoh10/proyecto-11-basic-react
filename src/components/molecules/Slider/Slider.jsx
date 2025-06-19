import './Slider.css';
import { useState } from 'react';
import Button from '../../atoms/Button/Button';

const Slider = ({ hours }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;

  const maxIndex = hours?.length - itemsPerSlide;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= maxIndex;

  return (
    <div className='slider-container flex-container'>
      <Button
        onClick={prevSlide}
        disabled={isPrevDisabled}
        className='prev-btn flex-container'
      />
      <div className='slider-wrapper flex-container'>
        {hours
          .slice(currentSlide, currentSlide + itemsPerSlide)
          .map((hour, index) => (
            <div key={index} className='slider flex-container'>
              <p>{hour.DateTime.substring(11, 16)}</p>
              <img
                src={`https://developer.accuweather.com/sites/default/files/${hour.WeatherIcon.toString().padStart(
                  2,
                  '0'
                )}-s.png`}
                alt={hour.IconPhrase}
              />
              <p>{hour.Temperature.Value} °C</p>
              <p>💧 {hour.PrecipitationProbability}%</p>
            </div>
          ))}
      </div>
      <Button
        onClick={nextSlide}
        disabled={isNextDisabled}
        className='next-btn flex-container'
      />
    </div>
  );
};

export default Slider;
