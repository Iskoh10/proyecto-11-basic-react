import CloudBg from '../../components/molecules/CloudBg/CloudBg';
import './CountriesByContinent.css';

import React from 'react';

const CountriesByContinent = () => {
  return (
    <div className='country-by-continent flex-container'>
      <CloudBg />
      <h2>Paises por continente</h2>
      <p>El usuario señala el continente y sale la lista de paises</p>
    </div>
  );
};

export default CountriesByContinent;
