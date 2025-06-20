import './Cities.css';
import CloudBg from '../../components/molecules/CloudBg/CloudBg';
import CitiesTemplate from '../../components/templates/CitiesTemplate/CitiesTemplate';

const Cities = () => {
  return (
    <main className='cities flex-container'>
      <CitiesTemplate />
      <CloudBg />
    </main>
  );
};

export default Cities;
