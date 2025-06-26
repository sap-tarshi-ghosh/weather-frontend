import React from 'react';
//import Weather from './Weather';
import SearchBar from './redux/weather/weatherSearchBar';
import WeatherComponent from './redux/weather/weatherComponent';

// function App() {
//   return(
//     <div>
//       <Weather />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1>Weather App </h1>
      <SearchBar/>
      <WeatherComponent/>
    </div>
  )
}

export default App;