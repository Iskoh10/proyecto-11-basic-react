import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());

const routesConfig = {
  '/weather/:cityKey': (params) =>
    `https://dataservice.accuweather.com/currentconditions/v1/${params.cityKey}?apikey=${process.env.API_KEY}&details=true`,

  '/hourly/:cityKey': (params) =>
    `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${params.cityKey}?apikey=${process.env.API_KEY}&metric=true`,

  '/daily/:cityKey': (params) =>
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${params.cityKey}?apikey=${process.env.API_KEY}&metric=true`
};

app.get('/locations/search', async (req, res, next) => {
  const cityName = req.query.q;

  if (!cityName) {
    return res.status(400).json({ error: 'Falta el nombre de la ciudad ' });
  }
  try {
    const response = await fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.API_KEY}&q=${cityName}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de ciudades' });
  }
});

Object.entries(routesConfig).forEach(([route, buildUrl]) => {
  app.get(route, async (req, res, next) => {
    try {
      const url = buildUrl(req.params);
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener datos del tiempo' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor levantaddo en: http://localhost:3000');
});
