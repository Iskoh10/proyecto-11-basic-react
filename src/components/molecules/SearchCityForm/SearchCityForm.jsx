import './SearchCityForm.css';
import { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Message from '../../atoms/Message/Message';
import FetchApi from '../../../services/FetchApi/FetchApi';
import { useEffect } from 'react';

const SearchCityForm = ({
  value = '',
  onChange = () => {},
  setCityAssignments = () => {},
  selectedBox = '',
  setIsModalOpen = () => {},
  setIsLoading
}) => {
  const [searchCity, setSearchCity] = useState('');
  const [showMsg, setShowMsg] = useState(false);
  const [msgText, setMsgText] = useState('');

  useEffect(() => {
    if (searchCity) {
      const fetchData = async () => {
        setIsLoading(true);
        const result = await FetchApi(searchCity);
        handleData(result);
        setIsLoading(false);
      };
      fetchData();
    }
  }, [searchCity]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!value.trim()) {
      showError('Introduce una ciudad');
      return;
    }

    setSearchCity(value);
  };

  const showError = (msg) => {
    setMsgText(msg);
    setShowMsg(true);
    onChange('');
    setTimeout(() => setShowMsg(false), 5000);
  };

  const handleData = (dataCity) => {
    if (!dataCity) {
      showError('No se recibieron los datos');
      return;
    }

    if (dataCity.error) {
      if (dataCity.error === 'City not found') {
        showError('Ciudad no encontrada');
      } else if (
        dataCity.error === 'API limit exceeded' ||
        dataCity.error === 'Service unavailable'
      ) {
        showError('Límite de peticiones superado o servicio no disponible');
      } else {
        showError(`Error: ${dataCity.error}`);
      }
      return;
    }

    setCityAssignments(dataCity, selectedBox);
    onChange('');
    setIsModalOpen(false);
    setShowMsg(false);
  };

  return (
    <>
      <form className='flex-container' onSubmit={handleSubmit}>
        <Input
          type='text'
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder='Busca una ciudad'
          id='search-city'
          label='Ciudad'
        />
        <Button type='submit' text={'Buscar'} className='search' />
      </form>

      {showMsg && <Message text={msgText} />}
    </>
  );
};

export default SearchCityForm;
