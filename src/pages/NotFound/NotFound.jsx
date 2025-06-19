import './NotFound.css';
import NoisyBackground from '../../components/atoms/NoisyBackground/NoisyBackground';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notfound'>
      <NoisyBackground />
      <div className='container'>
        <div className='top-half'>
          <span>404</span>
        </div>
        <div className='bottom-half'>
          <span>404</span>
        </div>
      </div>
      <h1>Page not found</h1>
      <Link to='/'>Volver a Home</Link>
    </div>
  );
};

export default NotFound;
