import './Cloud.css';

const Cloud = ({ style, className = '' }) => {
  return (
    <img
      src='/cloud.svg'
      alt='nube'
      className={`cloud ${className}`}
      style={style}
    />
  );
};

export default Cloud;
