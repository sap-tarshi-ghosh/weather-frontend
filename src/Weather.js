import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("Kolkata");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_API;
 
  
  


const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);

      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Could not fetch weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleLocationChange}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weatherData && !loading && !error && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} in C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
