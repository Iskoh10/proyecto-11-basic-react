import { useState } from 'react';
import citiesData from '../../../data/citiesData';
import './SearchCityForm.css';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Message from '../../atoms/Message/Message';

const SearchCityForm = ({
  setCityAssignments = () => {},
  setIsModalOpen = () => {}
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showMsg, setShowMsg] = useState(false);
  const [msgText, setMsgText] = useState('');

  return (
    <>
      {showMsg && (
        <Message text={inputValue ? msgText : 'Introduce una ciudad'} />
      )}

      <form
        className='flex-container'
        onSubmit={(e) => {
          e.preventDefault();
          const found = citiesData.find(
            (city) => city.nameCity.toLowerCase() === inputValue.toLowerCase()
          );

          if (found) {
            setCityAssignments(found);
            setInputValue('');
            setIsModalOpen(false);
          } else {
            setMsgText('Ciudad no encontrada');
            setShowMsg(true);

            setTimeout(() => {
              setShowMsg(false);
            }, 5000);
          }
        }}
      >
        <Input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Busca una ciudad'
          id='search-city'
          label='Ciudad'
        ></Input>
        <Button type='submit' text={'Buscar'} className='search'></Button>
      </form>
    </>
  );
};

export default SearchCityForm;
