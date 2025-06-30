import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import CityByName from './pages/CityByName/CityByName';
import Cities from './pages/Cities/Cities';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import CitiesByCountry from './pages/CitiesByCountry/CitiesByCountry';
import Loader from './components/atoms/Loader/Loader';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Header />
      {isLoading && <Loader />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/cities'
          element={<Cities setIsLoading={setIsLoading} />}
        />
        <Route
          path='/cityByName'
          element={<CityByName setIsLoading={setIsLoading} />}
        />
        <Route path='*' element={<NotFound />} />
        <Route
          path='/citiesByCountry/:countryID'
          element={<CitiesByCountry setIsLoading={setIsLoading} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
