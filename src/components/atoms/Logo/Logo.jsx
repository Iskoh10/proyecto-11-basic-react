import './Logo.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const [isNight, setIsNight] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 20 || hour < 6) {
      setIsNight(true);
    }
  }, []);

  return (
    <div className='logo-container'>
      <img
        src='accuweather.svg'
        alt='Logo App'
        className={`logo ${isNight ? 'night' : ''}`}
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default Logo;
