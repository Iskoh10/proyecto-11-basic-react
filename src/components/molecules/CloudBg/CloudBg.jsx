import './CloudBg.css';
import Cloud from '../../atoms/Cloud/Cloud';

const generateClouds = (count = 10) => {
  return Array.from({ length: count }).map(() => {
    const width = Math.random() * 40 + 80;
    const top = Math.random() * 80;
    const left = Math.random() * 100;
    const opacity = Math.random() * 0.5 + 0.3;

    return {
      width: `${width}px`,
      top: `${top}%`,
      left: `${left}%`,
      opacity
    };
  });
};

const CloudBg = () => {
  const clouds = generateClouds(10);

  return (
    <div className='cloud-container'>
      {clouds.map((style, index) => (
        <Cloud key={index} style={style} />
      ))}
    </div>
  );
};

export default CloudBg;
