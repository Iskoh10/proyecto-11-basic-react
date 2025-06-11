import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import CountriesByContinent from './pages/CountriesByContinent/CountriesByContinent';
import CityByName from './pages/CityByName/CityByName';
import Cities from './pages/Cities/Cities';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/cityByName' element={<CityByName />} />
        <Route
          path='/countriesByContinent'
          element={<CountriesByContinent />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
