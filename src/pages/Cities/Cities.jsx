import './Cities.css';
import CloudBg from '../../components/molecules/CloudBg/CloudBg';
import CitiesTemplate from '../../components/templates/CitiesTemplate/CitiesTemplate';

const Cities = ({ setIsLoading }) => {
  return (
    <main className='cities flex-container'>
      <CitiesTemplate setIsLoading={setIsLoading} />
      <CloudBg />
    </main>
  );
};

export default Cities;
