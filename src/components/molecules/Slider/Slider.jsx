import { useState } from 'react';
import './Slider.css';
import Button from '../../atoms/Button/Button';

const Slider = ({ horas }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;

  const maxIndex = horas?.length - itemsPerSlide;

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
        {horas
          .slice(currentSlide, currentSlide + itemsPerSlide)
          .map((hora, index) => (
            <div key={index} className='slider flex-container'>
              <p>{hora.hora}:00</p>
              <p>{hora.temp}°C</p>
              <p>{hora.precip}%</p>
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
