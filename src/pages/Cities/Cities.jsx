import CloudBg from '../../components/molecules/CloudBg/CloudBg';
import CitiesTemplate from '../../components/templates/CitiesTemplate/CitiesTemplate';
import './Cities.css';

const Cities = () => {
  return (
    <main className='cities flex-container'>
      <CitiesTemplate />
      <CloudBg />
      <h2>Ciudades</h2>
      <p>
        El usuario elige 4 ciudades de interes y se quedan guardadas para
        mostrarlas cada vez que vaya a la seccion Ciudades
      </p>
    </main>
  );
};

export default Cities;
