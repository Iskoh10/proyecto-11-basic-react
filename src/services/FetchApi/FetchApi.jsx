import handleFetchErrors from '../../utils/handleFetchErrors';

const FetchApi = async (cityName) => {
  try {
    const resCities = await fetch(
      `http://localhost:3000/locations/search?q=${cityName}`
    );
    handleFetchErrors(resCities);
    const data = await resCities.json();
    console.log('Data recibida:', data);

    const cityData = data.find(
      (city) =>
        city.LocalizedName.toLowerCase() === cityName.toLowerCase() &&
        city.Country.LocalizedName === 'Spain'
    );

    if (!cityData) {
      return { error: 'City not found' };
    }

    const cityKey = cityData.Key;

    const resWeather = await fetch(`http://localhost:3000/weather/${cityKey}`);
    handleFetchErrors(resWeather);
    const weatherData = await resWeather.json();
    console.log(weatherData);

    const resHourly = await fetch(`http://localhost:3000/hourly/${cityKey}`);
    handleFetchErrors(resHourly);
    const hourlyData = await resHourly.json();
    console.log(hourlyData);

    const resDaily = await fetch(`http://localhost:3000/daily/${cityKey}`);
    handleFetchErrors(resDaily);
    const dailyData = await resDaily.json();

    if (weatherData && weatherData.length > 0) {
      const weather = weatherData[0];

      return {
        nameCity: cityData.LocalizedName,
        weatherIcon: weather.WeatherIcon.toString().padStart(2, '0'),
        weatherText: weather.WeatherText,
        temperature: weather.Temperature.Metric.Value,
        realFeel: weather.RealFeelTemperature.Metric.Value,
        wind: weather.Wind.Speed.Metric.Value,
        windGusts: weather.WindGust.Speed.Metric.Value,
        uvIndexText: weather.UVIndexText,
        humidity: weather.RelativeHumidity,
        visibility: weather.Visibility.Metric.Value,
        pressure: weather.Pressure.Metric.Value,
        hourlyForecast: hourlyData,
        dailyForecast: dailyData.DailyForecasts
      };
    }

    return null;
  } catch (error) {
    return { error: 'Network or unexpected error' };
  }
};

export default FetchApi;
