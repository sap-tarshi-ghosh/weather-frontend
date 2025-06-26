import React from 'react';
import { useSelector } from 'react-redux';

const WeatherComponent = () => {
  const { data, status, error } = useSelector((state) => state.weather);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (!data) return <p>No data to display</p>;

  return (
    <div>
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherComponent;
