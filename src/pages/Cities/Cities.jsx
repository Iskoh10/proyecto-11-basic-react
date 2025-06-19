import { useState } from 'react';
import CloudBg from '../../components/molecules/CloudBg/CloudBg';
import CitiesTemplate from '../../components/templates/CitiesTemplate/CitiesTemplate';
import './Cities.css';

const Cities = () => {
  const [cityOne, setCityOne] = useState(null);
  const [cityTwo, setCityTwo] = useState(null);
  const [cityThree, setCityThree] = useState(null);
  const [cityFour, setCityFour] = useState(null);
  //! Eliminar estos estados, no los uso aqui

  return (
    <main className='cities flex-container'>
      <CitiesTemplate />
      <CloudBg />
    </main>
  );
};

export default Cities;
